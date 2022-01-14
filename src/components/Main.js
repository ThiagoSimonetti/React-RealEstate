import React, { Component } from "react";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
// import Home from "./HomeComponent";
// import Contact from "./ContactComponent";
// import About from "./AboutComponent";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  render() {
    // const HomePage = () => {
    //   return (
    //     <Home
    //       campsite={
    //         this.props.campsites.campsites.filter(
    //           (campsite) => campsite.featured
    //         )[0]
    //       }
    //       campsitesLoading={this.props.campsites.isLoading}
    //       campsitesErrMess={this.props.campsites.errMess}
    //     />
    //   );
    // };

    return (
      <div>
        <Header />
        {/* <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />

              <Route
                exact
                path="/contactus"
                render={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <Route
                exact
                path="/aboutus"
                render={() => <About partners={this.props.partners} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
// export default withRouter(Main);
