import { useState } from 'react';
import { Link } from 'react-router-dom';

import "./side-menu-bar.css";
import sideMenuIcon from "../assets/menu-icon.png";

export function SideMenuBar({isOpen, setIsOpen}) {

return (
<>
<button
  className="menu-icon"
  onClick={() => setIsOpen(true)}
>
  <img src={sideMenuIcon} alt="menu"/>
</button>


<aside className={isOpen ? "side-menu-open" : "side-menu-closed"}>

  <div 
    className="side-menu-overlay"
    onClick={() => setIsOpen(false)}
  ></div>


  <div className="side-menu-panel">

    <button 
      className="close-button"
      onClick={() => setIsOpen(false)}
    >
      X
    </button>


    <nav className="side-menu-nav">
      <Link to="/map">Map</Link>
      <a>News</a>
      <a>Services</a>
    </nav>

  </div>

</aside>
</>
);
}