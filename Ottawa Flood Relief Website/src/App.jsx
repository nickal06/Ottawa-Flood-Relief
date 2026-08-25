import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./components/protected-route-wrapper";
import { UserDashboard } from "./pages/user-dashboard";
import { Home } from "./pages/home";
import { Map } from "./pages/map";
import { AIChatWidget } from "./components/AI-chat-widget";
import { HeaderBar } from "./components/header-bar";
import { SignInModal } from "./components/sign-in-pop-up-window";
import { SignUpModal } from "./components/sign-up-pop-up-window";

export function App() {

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
    }
  }, [userName]);

  return (
    <>
      <HeaderBar
        setShowSignInModal={setShowSignInModal}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>

        <Route path="/" element={
          <Home />} 
        />

        <Route path="/home" element={<Home />} />

        <Route path="/map" element={<Map />} />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UserDashboard userName={userName} />
            </ProtectedRoute>
          }
        />

      </Routes>

      <AIChatWidget
        messages={messages}
        setMessages={setMessages}
      />

      {showSignUpModal && (
        <SignUpModal
          onClose={() => setShowSignUpModal(false)}
          setUserName={setUserName}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {showSignInModal && (
        <SignInModal
          onClose={() => setShowSignInModal(false)}
          setUserName={setUserName}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}