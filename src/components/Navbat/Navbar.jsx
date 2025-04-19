import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpenIcon from '../../assets/menu_open.svg';
import menuCloseIcon from '../../assets/menu_close.svg';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Me', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Portfolio', href: '#work', id: 'work' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveMenu(id);
    setMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className="navbar__logo" />

      <div className="navbar__menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={menuOpen ? menuCloseIcon : menuOpenIcon}
          alt={menuOpen ? "Close menu" : "Open menu"}
          className="navbar__menu-icon"
        />
      </div>

      <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id} className="navbar__item">
            <AnchorLink
              className='navbar__link'
              offset={50}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
            >
              <p>{item.label}</p>
            </AnchorLink>
            {activeMenu === item.id && (
              <img src={underline} alt="active underline" className="navbar__underline" />
            )}
          </li>
        ))}
        <li className="navbar__connect-mobile">
          <AnchorLink className='navbar__link' offset={50} href='#contact' onClick={() => setMenuOpen(false)}>
            Connect With Me
          </AnchorLink>
        </li>
      </ul>

      <div className="navbar__connect desktop-only">
        <AnchorLink className='navbar__link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
