import React, { Component } from "react";
import Main from "./components/Main";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

import { HOMES } from "./shared/homes";

const store = ConfigureStore();

class App extends Component {
  // Temporary constructor before redux instalation

  render() {
    return (
      <Provider store={store}>
        {/* <BrowserRouter> */}
        <div className="App">
          <Main />
        </div>
        {/* </BrowserRouter> */}
      </Provider>
    );
  }
}

export default App;
