import { useState, useRef, useEffect } from "react";
import "./AI-chat-widget.css";


export function AIChatWidget() {
  
  const [ isOpen, setIsOpen ] = useState(false);
  const [ messages, setMessages ] = useState([{id: 1, text: "Hello, I am Navigator! How may I assist you today?", sender: "ai"}]);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef(null);
  
  function toggleChat() {
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  function handleSendMessage(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    const UserMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(UserMessages => [...UserMessages, UserMessage]);
    setInputValue("");
  }

  return (
    <>
      <button className="floaitng-chat-button" onClick={toggleChat} aria-label="Open AI Chat Widget">
        💬
      </button>

      { isOpen && (
        <div className="ai-chat-widget">
          <div className="chat-widget-header-container">
            
            <h1 
              className="chat-widget-title"> 
                Navigator Chat 
            </h1>
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
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-widget-input-container" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-widget-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              className="chat-widget-send-button" 
              type="submit"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}