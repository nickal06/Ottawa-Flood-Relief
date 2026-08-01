import searchIcon from "../assets/search-icon.png";

export function AddressSearchComponent(){
  
  return(
  <>  
    <div className="location-card">
      <p className="location-description">
        Give OFRW a one-time try, and instantly see latest news, services, and more pertaining to your area.
      </p>

    <h3>
      Sign up to save preferences and data for a better experience.
    </h3>

    <div className="search-container">
      <input 
        type="text" 
        placeholder="Enter your address"
      />

      <button className="search-button">
        🔍
      </button>
    </div>
  </div>
  </>
  );
} 