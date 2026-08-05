import { HeaderBar } from "./components/header-bar";
import { Home } from "./pages/home";
import { Map } from "./pages/map";
import { InfoSection } from "./components/info-section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AIChatWidget } from "./components/AI-chat-widget";
import { UserDashboard } from "./pages/user-dashboard";
import { useState, useEffect } from 'react';

export function App() {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([
        {
          id: 1,
          text: "Hello, I am Navigator! How may I assist you today?",
          sender: "ai",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (messages !== null) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  if (messages === null) {
    return null; 
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
      <AIChatWidget 
        messages={messages} 
        setMessages={setMessages} 
        />
    </>
  );
}
