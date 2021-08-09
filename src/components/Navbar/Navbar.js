import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ButtonStyled } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handelClick = () => {
    setClick(!click);
  };

  const ShowButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    ShowButton();
  }, []);

  window.addEventListener("resize", ShowButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              ULTRA
            </NavLogo>
            <MoblieIcon onClick={handelClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MoblieIcon>
            <NavMenu onClick={handelClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/service">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Product</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <ButtonStyled primary="true">Sign Up</ButtonStyled>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <ButtonStyled fontbig="true" primary="true">
                      Sign Up
                    </ButtonStyled>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
