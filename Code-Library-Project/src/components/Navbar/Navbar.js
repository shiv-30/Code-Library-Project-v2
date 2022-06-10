import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaBookOpen } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav style={{fontSize:"20px"}}>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu} style={{ textDecoration: 'none', color: 'white' }}>
              <NavIcon />
              CODELIBRARY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}  style={{ textDecoration: 'none', color: 'white' }}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/engtrack' onClick={closeMobileMenu} style={{ textDecoration: 'none', color: 'white' }}>
                  Engineering Track
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu} style={{ textDecoration: 'none', color: 'white' }}>
                  TechBlog
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>
                    <Button onClick={closeMobileMenu} fontBig primary >
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
