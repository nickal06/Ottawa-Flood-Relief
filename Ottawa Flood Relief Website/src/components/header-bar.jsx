import "../App.css";


export function HeaderBar() {
  return (
  <>
    <nav className="header-bar"> 
      <p className="header-title"> Ottawa Flood Relief Website </p>
      <div className="page-directories">
        <a href="/"> Home </a>
        <a href="/map"> Map </a>
        <a href="/resources"> Resources </a>
        <a href="/about"> About </a>
      </div>
    </nav>
  </>
  );
}
