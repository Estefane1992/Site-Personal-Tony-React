import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../../Context/theme";
import Container from "react-bootstrap/Container";
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [themename]);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="container">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sobre">
                Sobre
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Item>
            <div className="theme-switch">
              <div id="toggle" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
