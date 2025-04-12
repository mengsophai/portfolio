import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <p>Home</p>
          {menu === "home" && <  img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("about")}>
          <p>About Me</p>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("services")}>
          <p>Services</p>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("work")}>
          <p>Portfolio</p>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <p>Contact</p>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
  