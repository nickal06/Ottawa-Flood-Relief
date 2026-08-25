export function HeaderBar({
  setShowSignInModal,
  isLoggedIn,
  setIsLoggedIn
}) {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
  };

  return (
    <nav className="header-bar">
      <p className="header-title">
        Ottawa Flood Relief Website
      </p>

      <div className="page-directories">
        <a href="/home">Home</a>
        <a href="/map">Map</a>
        <a href="/user-dashboard">User Dashboard</a>

        <a
          className="sign-in-button"
          onClick={() => {
            if (isLoggedIn) {
              handleSignOut();
            } else {
              setShowSignInModal(true);
            }
          }}
        >
          {isLoggedIn ? "Sign out" : "Sign in"}
        </a>
      </div>
    </nav>
  );
}