import "./user-dashboard.css";
import { useState, useEffect } from "react";
import { AIChatWidget } from "../components/AI-chat-widget";

export function UserDashboard() {
  return (
    <div className="user-dashboard-title-container" style={{ minHeight: "100vh", padding: "20px" }}>
      <h1 className="user-dashboard-title" style={{ color: "#333" }}>
        Welcome back, <span className="user" style={{ color: "blue" }}>Nicholas.</span>
      </h1>
    </div>
  );
}