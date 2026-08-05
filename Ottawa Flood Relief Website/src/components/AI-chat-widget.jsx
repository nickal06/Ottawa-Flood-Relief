import { useState, useRef, useEffect } from "react";
import "./AI-chat-widget.css";

export function AIChatWidget({ messages , setMessages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);


  function toggleChat() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  async function handleSendMessage(event) {
    if (event) event.preventDefault();
    if (inputValue.trim() === "" || isLoading) return;

    const userText = inputValue;
    const userMsgId = Date.now();

    const newUserMessage = { id: userMsgId, text: userText, sender: "user" };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    const apiHistory = updatedMessages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiHistory }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), text: data.reply, sender: "ai" },
        ]);
      } else {
        throw new Error(data.error || "No response received");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: "Sorry, I ran into an issue connecting to the AI.", sender: "ai" },
      ]);
    } finally {
      setIsLoading(false);
    }
  
  }

  return (
    <>
      <button className="floaitng-chat-button" onClick={toggleChat} aria-label="Open AI Chat Widget" type="button">
        💬
      </button>

      {isOpen && (
        <div className="ai-chat-widget">
          <div className="chat-widget-header-container">
            <h1 className="chat-widget-title">Navigator Chat</h1>
            <button
              className="close-button"
              onClick={toggleChat}
              aria-label="Close AI Chat Widget"
              type="button"
            >
              X
            </button>
          </div>

          <div className="chat-widget-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#0a6c74" : "#e9ecef",
                  color: msg.sender === "user" ? "#fff" : "#000",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#e9ecef",
                  color: "#666",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontStyle: "italic",
                }}
              >
                Navigator is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-widget-input-container" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-widget-input"
              value={inputValue}
              disabled={isLoading}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button className="chat-widget-send-button" type="submit" disabled={isLoading}>
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}