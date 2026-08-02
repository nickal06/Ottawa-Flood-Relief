import { Modal } from "./Modal";
import "./sign-in-up-pop-up-window.css";
import { useState } from "react";

export function SignInModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      
      <button 
      className="sign-in-button">
        Sign in
      </button>

    </Modal>
  )
}
