import { Modal } from "./Modal";
import "./sign-in-up-pop-up-window.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignInModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  const navigate = useNavigate();

  function handleSignIn(){
    navigate("/user-dashboard");
  }
  
  async function handleSignIn2(event) {
    if (event) event.preventDefault();

    try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json(); 

    if (!response.ok) {
    
      setLoginStatus(data || "Invalid email or password. Please try again.");
      return;
    }

    localStorage.setItem("token", data.token);
    setLoginStatus("Login successful! Please wait...");
    setTimeout(() => {
      handleSignIn();
      }, 2500);

    } catch (error) {
    console.error("Network error during login:", error);
    setLoginStatus("An error occurred. Please try again.");
    }
  }

  return (
    <Modal close={onClose}>

      <h2>Sign in to Ottawa Flood Relief Services</h2>

      <div className="form-group">
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div 
      className="form-group">
        <input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <p
       style={{ color: loginStatus.includes("successful") ? "green" : "red" }}
      >
        {loginStatus}
      </p>

      <button 
      className="sign-in-button" onClick={handleSignIn2}>
        Sign in
      </button>

    </Modal>
  )
}
