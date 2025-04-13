import React, { useRef, useState } from 'react';
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
  const menuRef = useRef();

  const openMenu = () => menuRef.current.classList.add('open');
  const closeMenu = () => menuRef.current.classList.remove('open');

  const handleNavClick = (id) => {
    setActiveMenu(id);
    closeMenu();
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className="navbar__logo" />

      <img src={menuOpenIcon} alt="Open menu" onClick={openMenu} className="navbar__menu-icon" />

      <ul ref={menuRef} className='navbar__menu'>
        <img src={menuCloseIcon} alt="Close menu" onClick={closeMenu} className="navbar__close-icon" />

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
            {activeMenu === item.id && <img src={underline} alt="active underline" className="navbar__underline" />}
          </li>
        ))}
      </ul>

      <div className="navbar__connect">
        <AnchorLink className='navbar__link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
