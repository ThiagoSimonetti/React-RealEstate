import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { homes: state };
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}

// export default Main;
export default connect(mapStateToProps)(Main);
