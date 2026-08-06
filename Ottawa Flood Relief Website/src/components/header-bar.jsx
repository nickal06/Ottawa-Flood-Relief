import "../pages/home";

export function HeaderBar({ setShowSignInModal }) {
  return (
    <nav className="header-bar"> 
      <p className="header-title"> Ottawa Flood Relief Website </p>
      <div className="page-directories">
        <a href="/home"> Home </a>
        <a href="/map"> Map </a>
        <a href="/user-dashboard"> User Dashboard </a>
        <a className="sign-in-button" onClick={setShowSignInModal}>
          Sign in
        </a>
      </div>
    </nav>
  );
}
