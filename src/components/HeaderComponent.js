import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

import scroller from "react-scroll/modules/mixins/scroller";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar
        dark
        sticky="top"
        expand="md"
        fixed="top"
        // className="bg-trasparent"
        className="bg-navbar"
      >
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="/assets/images/logo2.png"
            height="30"
            width="30"
            alt="Dela Marta Imóveis Logo"
          />
        </NavbarBrand>
        <NavbarBrand
          className="mr-auto pl-2"
          href="/"
          // onClick={() =>
          //   scroller.scrollTo("home_id", {
          //     smooth: true,
          //     duration: 1000,
          //   })
          // }
        >
          Dela Marta Imóveis
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                href="#directory_id"
                onClick={() =>
                  scroller.scrollTo("directory_id", {
                    smooth: true,
                    duration: 1000,
                  })
                }
              >
                Imóveis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                href="#contact_id"
                onClick={() =>
                  scroller.scrollTo("contact_id", {
                    smooth: true,
                    duration: 1000,
                  })
                }
              >
                Contato
              </NavLink>
            </NavItem>
          </Nav>
          <div>
            <a
              className="whatsapp-navlink"
              href="https://wa.me/5511991650573"
              target="_blank"
            >
              <i className="fa fa-whatsapp"></i> (11) 99165-0573
            </a>
          </div>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
