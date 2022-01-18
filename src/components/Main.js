import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Directory from "./DirectoryComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { homes: state.homes };
};

class Main extends Component {
  render() {
    console.log("homes", this.props.homes);
    return (
      <div>
        <Header />
        <Directory homes={this.props.homes} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

// export default Main;
export default connect(mapStateToProps)(Main);
