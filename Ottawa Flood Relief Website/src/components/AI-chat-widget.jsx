import { useState, useRef, useEffect } from "react";
import "./AI-chat-widget.css";


export function AIChatWidget() {
  
  const [ isOpen, setIsOpen ] = useState(false);

  function toggleChat() {
    setIsOpen(!isOpen);
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
                Navigator
            </h1>
            <button 
              className="close-button" 
              onClick={toggleChat} 
              aria-label="Close AI Chat Widget">
                  X
              </button>
          </div>

          <div className="chat-widget-messages">
            <p> Placeholder (use array state variable to store message history) </p>
          
          </div>

          // add autoscroll ref to the messages container and useEffect to scroll to bottom when new messages are added

          <form className="chat-widget-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-widget-input"
            />
            <button className="chat-widget-send-button">
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}