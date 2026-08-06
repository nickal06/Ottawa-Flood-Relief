import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./components/protected-route-wrapper";
import { UserDashboard } from "./pages/user-dashboard";
import { Home } from "./pages/home";
import { Map } from "./pages/map";
import { AIChatWidget } from "./components/AI-chat-widget";

export function App() {
  const [isLoggedIn, setLogin] = useState(
    !!localStorage.getItem("token")
  );

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/map" element={<Map />} />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <AIChatWidget
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
}