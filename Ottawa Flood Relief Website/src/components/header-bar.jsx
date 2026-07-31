import "./header-bar.css";


export function HeaderBar() {
  return (
  <>
    <nav className="header-bar"> 
      <p className="header-title"> Ottawa Flood Relief Website </p>
      <div className="page-directories">
        <a href="/home"> Home </a>
        <a href="/map"> Map </a>
        <a href="/resources" className="sign-in-button"> Sign in </a>
      </div>
    </nav>
  </>
  );
}
