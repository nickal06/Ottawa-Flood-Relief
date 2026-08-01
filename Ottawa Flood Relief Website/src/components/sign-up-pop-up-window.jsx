import "./sign-up-pop-up-window.css";
import { Modal } from "./modal";

export function SignUpModal({ onClose }) {
  return (
    <Modal close={onClose}>

      <h2>Sign Up for Ottawa Flood Relief Services</h2>

      <h3>Account Information</h3>

      <div className="form-group">
        <input placeholder="Enter your email" type="email" />
      </div>

      <div className="form-group">
        <input placeholder="Enter your password" type="password" />
      </div>

      <div className="form-group">
        <input placeholder="Confirm your password" type="password" />
      </div>

      <div className="form-group">
        <input placeholder="Enter your address" type="text" />
      </div>


      <h3>Household Information</h3>

      <div className="form-group">
        <input placeholder="Number of adults in household" type="number" />
      </div>

      <div className="form-group">
        <input placeholder="Number of children in household" type="number" />
      </div>

      <div className="form-group">
        <input placeholder="Number of pets in household" type="number" />
      </div>

      <div className="form-group">
        <input 
          placeholder="Specify any special needs or considerations" 
          type="text" 
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


      <div className="button-container">
        <button className="submit-button">
          Sign Up
        </button>
      </div>

    </Modal>
  );
}