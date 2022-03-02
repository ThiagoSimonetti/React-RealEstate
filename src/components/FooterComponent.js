import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h3 className="mb-3">Social Media</h3>
            <a href="http://instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://www.facebook.com/">
              <i className="fa fa-facebook px-3"></i>
            </a>
            <a href="https://wa.me/41512345657" target="_blank">
              <i className="fa fa-whatsapp pr-2"></i>
            </a>
          </div>

          <div className="col-12 text-center">
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="tel:+(415) 123-4567"
            >
              <i className="fa fa-phone" /> (415) 123-4567
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="mailto:mail@email.com"
            >
              <i className="fa fa-envelope-o" /> myemail@email.com
            </a>
          </div>
          <div className="col text-center mt-4">
            <p>
              &copy; 2021 Built with ❤️ by Thiago and Washington. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
