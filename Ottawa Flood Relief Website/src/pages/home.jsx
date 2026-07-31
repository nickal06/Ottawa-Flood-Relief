import { HeaderBar } from "../components/header-bar";
import { TypeWriter } from "../components/typewriter-text";
import  searchIcon  from "../assets/search-icon.png";

export function Home(){
  return (
    <>
    <HeaderBar />
    <div className="top-section">
      <div className="type-writer-animation">
        <TypeWriter text={"Navigate your Ottawa flood emergency with real-time support, and tailored news and services, all at your fingertips"}/>
        <p className="subtext"> *By clicking Sign Up below, you are agreeing to allow OFRW to use your data for personalized services.</p>
        <button className="sign-up-button"> Sign Up Now! </button>
      </div>
      <div className="seaerch-bar-container">
        <button className="search-button"> 
          <img src={searchIcon} alt="search"/>
        </button>
        <input className="input-address" type="text" placeholder="Enter your address" />
      </div>
    </div>
  </>
  )
}