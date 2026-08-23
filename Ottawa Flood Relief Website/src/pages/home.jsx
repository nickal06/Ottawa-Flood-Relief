import { HeaderBar } from "../components/header-bar";
import { TypeWriter } from "../components/typewriter-text";
import "./Home.css";
import { InfoSection } from "../components/Info-Section";
import reliefImage from "../assets/relief.png";
import newsImage from "../assets/news.png";
import alertImage from "../assets/alert-icon.png";
import { AddressSearchComponent } from "../components/address-search";
import { useState } from "react";
import { SignUpModal } from "../components/sign-up-pop-up-window";
import { SignInModal } from "../components/sign-in-pop-up-window";


export function Home() {
  
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>

      {showSignUpModal &&
        <SignUpModal onClose={() => setShowSignUpModal(false)} />
        }

      
      <div className="top-section">
        <div className="type-writer-animation">
          <TypeWriter 
            text="Navigate your Ottawa flood emergency with real-time support, and tailored news and services, all at your fingertips"
          />
          <p className="subtext"> 
            *By clicking Sign Up below, you are agreeing to allow OFRW to use your data for personalized services.
          </p>
          <button className="sign-up-button" onClick = {() => setShowSignUpModal(true)}> 
            Sign up now! 
          </button>
        </div>
      </div>

      <InfoSection 
        title="Real Time Flood Alerts and Insights" 
        text="Stay ahead of changing conditions with live flood warnings, weather alerts, road closures, and water level updates tailored to your location. Make informed decisions before, during, and after a flood event."
        className="info-section-container-grey" 
        image={alertImage}
      />

      <InfoSection 
        title="Easily Find Local Resources and Services" 
        text="Quickly locate nearby emergency shelters, food assistance, medical services, sandbag distribution sites, and other essential community resources. Help is always just a few clicks away." 
        className="info-section-container-white" 
        image={reliefImage}
      />

      <InfoSection 
        title="Find News and Safety Services" 
        text="Access verified updates from the City of Ottawa, Environment Canada, and emergency management agencies. Receive practical guidance, preparedness tips, and recovery information from trusted sources all in one place." 
        className="info-section-container-grey"  
        image={newsImage}
      />
      < AddressSearchComponent />
    </>
  );
}