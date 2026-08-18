import { Link } from 'react-router-dom';

import "./side-menu-bar.css";
import sideMenuIcon from "../assets/menu-icon.png";

export function SideMenuBar({isOpen, setIsOpen}) {

return (
<>
  <div className="side-menu-panel">

    <nav className="side-menu-nav">
      <a>Alerts</a>
      <a>News</a>
      <a>Services</a>
    </nav>

  </div>
</>
);
}