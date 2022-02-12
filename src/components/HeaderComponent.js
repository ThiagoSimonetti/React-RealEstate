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
import Scroll from "react-scroll";
import Button from "reactstrap/lib/Button";
import scroller from "react-scroll/modules/mixins/scroller";
// import NavbarText from "reactstrap/lib/NavbarText";
// import { NavLink } from "react-router-dom";

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
        <NavbarBrand
          href="/"
          // onClick={() =>
          //   scroller.scrollTo("home_id", {
          //     smooth: true,
          //     duration: 1000,
          //   })
          // }
        >
          WdM Imóveis
        </NavbarBrand>
        {/* <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="30"
                alt="NuCamp Logo"
              />
            </NavbarBrand> */}
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
              href="https://wa.me/14088496470"
              target="_blank"
            >
              <i className="fa fa-whatsapp"></i> (408) 849-6470
            </a>
          </div>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
