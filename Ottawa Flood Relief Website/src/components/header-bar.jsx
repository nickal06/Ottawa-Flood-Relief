import { useNavigate } from "react-router-dom";

export function HeaderBar({ setShowSignInModal, isLoggedIn, setIsLoggedIn }) {
  
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/home")
  }
  
  
  return (
    <nav className="header-bar"> 
      <p className="header-title"> Ottawa Flood Relief Website </p>
      <div className="page-directories">
        <a href="/home"> Home </a>
        <a href="/map"> Map </a>
        <a href="/user-dashboard"> User Dashboard </a>
        
        
        <a 
        className="sign-in-button" 
        onClick={() => 
          {
            if (isLoggedIn){
              handleSignOut();
            } else {
              setShowSignInModal(true);
            }
          }
        }
          
        >
          {isLoggedIn ? "Sign Out" : " Sign In"}
        </a>
      </div>
    </nav>
  );
}
