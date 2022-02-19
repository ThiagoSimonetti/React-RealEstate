import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h3 className="mb-3">Redes Sociais</h3>
            <a href="http://instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://www.facebook.com/">
              <i className="fa fa-facebook px-3"></i>
            </a>
            <a href="https://wa.me/5511991650573" target="_blank">
              <i className="fa fa-whatsapp pr-2"></i>
            </a>
          </div>

          <div className="col-12 text-center">
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="tel:+(11) 99165-0573"
            >
              <i className="fa fa-phone" /> (11) 99165-0573
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="mailto:wdm2007@terra.com.br"
            >
              <i className="fa fa-envelope-o" />
              wdm2007@terra.com.br
            </a>
          </div>
          <div className="col text-center mt-4">
            <p>
              &copy; 2022 Built with ❤️ in California by Thiago and Washington.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
