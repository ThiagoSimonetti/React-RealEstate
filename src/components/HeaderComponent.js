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
      <React.Fragment>
        <Navbar color="dark" dark sticky="top" expand="md" fixed="top">
          <NavbarBrand href="/">WdM Imóveis</NavbarBrand>
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
                <NavLink className="nav-link" href="#">
                  Comprar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#">
                  Vender
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#">
                  Financiamento
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#">
                  Contato
                </NavLink>
              </NavItem>
            </Nav>

            <NavLink className="nav-link" active onclick={() => {}}>
              <i className="fa fa-whatsapp navwhatsapp" /> (11) 9123-4567
            </NavLink>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
