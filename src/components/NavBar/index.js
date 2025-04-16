import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavLinkR
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import Logo from "../../images/logo.PNG";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/* <img src={Logo} style={{width: "8%", height: "auto"}} alt="Agrigators Earth" /> */}
            Agrigators Earth
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu className="justify-content-end">
            <NavItem>
              <NavLinkR
                to="member"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                सदस्य बने
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR
                to="blog"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                पाठशाला
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR
                to="buy"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                फ़ीड खरीदें
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR to="sell">उत्पाद विक्रय</NavLinkR>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
