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
      <React.Fragment>
        <div className="section-1">
          <Navbar
            dark
            sticky="top"
            expand="md"
            fixed="top"
            className="bg-trasparent"
          >
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
                    Imóveis
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#">
                    Contato
                  </NavLink>
                </NavItem>
              </Nav>
              <div>
                <a href="https://wa.me/14088496470" target="_blank">
                  <i class="fa fa-whatsapp"></i> (408) 849-6470
                </a>
              </div>
            </Collapse>
          </Navbar>
          {/* <div class="hero-text-box text-center">
            <h1 class="mt-5">Excelência em Serviço</h1>
            <p class="lead">
              Os melhores imóveis da região de Sao Paulo para você. Serviço
              personalizado ao cliente. Consultoria, financiamento, compra, e
              venda. Estou pronto a atende-lo.
            </p>
            <p class="">Waldemar Dela Marta</p>
          </div> */}
          {/* <div class="hero-text-box text-center">
            <h2 class="mt-5">Portfolio: Realtor Website</h2>
            <h3>
              Don’t practice until you get it right. Practice until you can’t
              get it wrong.
            </h3>
          </div> */}
          <div class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light pt-4">Excelência em Serviço</h1>
                <p class="lead mt-4">
                  Os melhores imóveis da região de São Paulo para você. Serviço
                  personalizado ao cliente: Consultoria, financiamento, compra,
                  e venda. Estou pronto a atendê-lo!
                </p>
                {/* <!-- assinatura em letra cursiva --> */}
                <i class="">Waldemar Dela Marta</i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
