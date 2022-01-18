import React from "react";
// import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/directory">Directory</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div> */}
          <div className="col-12 text-center py-3">
            <h4>Redes Sociais</h4>
            <a href="http://instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://www.facebook.com/">
              <i className="fa fa-facebook px-2"></i>
            </a>
            <a href="http://www.whatsapp.com/">
              <i className="fa fa-whatsapp pr-2"></i>
            </a>
            <a href="http://www.whatsapp.com/">
              <i className="fa fa-envelope-o"></i>
            </a>
          </div>

          <div className="col-12 text-center">
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="tel:+(11) 1234-5678"
            >
              <i className="fa fa-phone " /> (11) 1234-5679
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> contato@protonmail.com.br
            </a>
          </div>
          <div className="col text-center mt-4">
            <span>
              Built with ❤️ in California by Thiago and Washington. Todos
              direitos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
