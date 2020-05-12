import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

import mq from "../../utils/mediaQueries"
import {colors} from "../../utils/variables"
import Container from "../elements/layout/Container"

const Nav = styled("nav")({
  display: "flex",
  alignItems: "stretch",
  position: "relative", 
  minHeight: "3.25rem", 
  backgroundColor: "#fff",
  zIndex: 30,
})
const NavContainer = styled(Container)({
  display: "block",
  width: "100%",
  minHeight: "3.25rem",
  paddingTop: 0,
  paddingBottom: 0,
  [mq.min.md]: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  [mq.min.lg]: {
    display: "flex",
  }
})
const NavBrand = styled("div")({
  flexShrink: "0",
  alignItems: "stretch",
  display: "flex",
  minHeight: "3.25rem",

  "img": {
    marginBottom: 0,
  },
  [mq.min.xl]: {
    marginLeft: "-.75rem"
  },
})
const NavItem = styled(GatsbyLink)({
  position: "relative",
  // color: "#4a4a4a",
  display: "flex",
  flex: "0 0 auto",
  alignItems: "center",
  padding: "0.5rem 0.75rem",
  lineHeight: "1.5",
  textDecoration: "none", 
  cursor: "pointer",
  color: colors.primary.default,
  ":hover": {
    color: colors.primary.dark
  }
})
const NavBurger = styled(({onClick, className}) => {
  return (
    <div
      className={className}
      data-target="navMenu"
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </div>
  )
})({
  color: "#4a4a4a",
  cursor: "pointer",
  display: "block",
  height: "3.25rem",
  position: "relative",
  width: "3.25rem",
  marginLeft: "auto",
  ":hover": {
    backgroundColor: "rgba(0,0,0,.05)",
  },
  "span": {
    backgroundColor: "currentColor",
    display: "block",
    height: "1px",
    left: "calc(50% - 8px)",
    position: "absolute",
    transformOrigin: "center",
    transitionDuration: "86ms",
    transitionProperty: "background-color,opacity,transform",
    transitionTimingFunction: "ease-out",
    width: "16px",
    "&:first-child": { top: "calc(50% - 6px)" },
    "&:nth-child(2)": { top: "calc(50% - 1px)" },
    "&:nth-child(3)": { top: "calc(50% + 4px)" },
  },
  [mq.min.lg]: {
    display: "none"
  }
}, ({ isActive }) => (
  isActive && {
    "span": {
      "&:first-child": { transform: "translateY(5px) rotate(45deg)" },
      "&:nth-child(2)": { opacity: 0 },
      "&:nth-child(3)": { transform: "translateY(-5px) rotate(-45deg)"},
    }
}))
const NavMenu = styled("div")(({isActive}) => ({
  display: isActive ? "block" : "none",
  [mq.max.lg]: {
    backgroundColor: "white",
    boxShadow: "0 8px 16px rgba(43, 37, 35, 0.1)",
    padding: "0.5rem 0"
  },
  [mq.min.lg]: {
    marginRight: "-.75rem",
    flexGrow: "1",
    flexShrink: "0",
    alignItems: "stretch",
    display: "flex",
  }
}))


const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false)
  let toggleHamburger = () => setIsNavbarActive(!isNavbarActive)

  return (
    <Nav role="navigation" aria-label="main-navigation">
      <NavContainer>
          <NavBrand>
            <NavItem to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              Real Sissy Talk
            </NavItem>
            {/* <NavBurger isActive={isNavbarActive} onClick={toggleHamburger} /> */}
          </NavBrand>
          {/* <NavMenu id="navMenu" isActive={isNavbarActive}>
            <NavItem className="navbar-item" to="/about">About</NavItem>
            <NavItem className="navbar-item" to="/products">Products</NavItem>
            <NavItem className="navbar-item" to="/blog">Blog</NavItem>
            <NavItem className="navbar-item" to="/contact">Contact</NavItem>
            <NavItem className="navbar-item" to="/contact/examples">Form Examples</NavItem>
          </NavMenu> */}
      </NavContainer>
    </Nav>
  )
}

export default Navbar
