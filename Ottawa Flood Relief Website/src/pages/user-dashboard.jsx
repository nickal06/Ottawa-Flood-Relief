import {useState} from 'react';

import {SideMenuBar} from "../components/side-menu-bar";

export function UserDashboard() {

  const [isOpen, setIsOpen] = useState(false);

  return (
      
      <SideMenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
  
    );
}