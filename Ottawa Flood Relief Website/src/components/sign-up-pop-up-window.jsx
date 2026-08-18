import "./sign-in-up-pop-up-window.css";
import { Modal } from "./modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUpModal({ onClose, setLogin, setUserName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfPets, setNumberOfPets] = useState(0);
  const [specialNeeds, setSpecialNeeds] = useState("");

  const [userCreated, setUserCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setUserCreated(false);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    const username = email ? email.split("@")[0] : "";

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          address: address,
          numberOfAdults: Number(numberOfAdults) || 0,
          numberOfChildren: Number(numberOfChildren) || 0,
          numberOfPets: Number(numberOfPets) || 0,
          specialNeeds: specialNeeds,
        }),
      });

      const data = await response.text();

      console.log("Server response:", data);

      if (!response.ok) {
        console.error("Registration error:", data);
        setErrorMessage(data || "An error occurred. Please try again.");
        return;
      }

      setUserCreated(true);
      setLogin(true);

      setTimeout(() => {
        onClose();
        navigate("/user-dashboard");
      }, 2500);

    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  }

  return (
    <Modal close={onClose}>
      <h2>Sign up for Ottawa Flood Relief Services</h2>

      <form onSubmit={handleSubmit}>
        <h3>Account Information</h3>

        <div className="form-group">
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Enter your address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <h3>Household Information</h3>

        <div className="form-group">
          <input
            placeholder="Number of adults in household"
            type="number"
            min="0"
            value={numberOfAdults}
            onChange={(e) =>
              setNumberOfAdults(Math.max(0, Number(e.target.value)))
            }
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Number of children in household"
            type="number"
            min="0"
            value={numberOfChildren}
            onChange={(e) =>
              setNumberOfChildren(Math.max(0, Number(e.target.value)))
            }
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Number of pets in household"
            type="number"
            min="0"
            value={numberOfPets}
            onChange={(e) =>
              setNumberOfPets(Math.max(0, Number(e.target.value)))
            }
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Specify any special needs or considerations"
            type="text"
            value={specialNeeds}
            onChange={(e) => setSpecialNeeds(e.target.value)}
          />
        </div>

        <h3>Preferences</h3>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            Flood Alerts
          </label>

          <label>
            <input type="checkbox" />
            Emergency Services
          </label>

          <label>
            <input type="checkbox" />
            Local News
          </label>

          <label>
            <input type="checkbox" />
            Community Resources
          </label>
        </div>

        <p style={{ color: "red" }}>
          {errorMessage ? errorMessage : ""}
          {" "}Don't have an account?{" "}
          <a href="/home">Go to Home to Sign In.</a>
        </p>

        <p style={{ color: "green" }}>
          {userCreated
            ? "User created successfully! Please wait..."
            : ""}
        </p>

        <div className="button-container">
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
}