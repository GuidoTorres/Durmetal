import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { IconContext } from "react-icons/lib";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              DURMETAL
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                  activeClass= "active"
                >
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
                activeClass= "active"
                >Servicios</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="cost"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
                activeClass= "active"
                >Clientes</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
                activeClass= "active">Cotización</NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/signin">Cotizar </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
