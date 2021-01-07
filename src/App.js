import React from "react";
import "./App.css";

import {Provider} from "./context";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider className="App"> 
      <Router>
        <React.Fragment >
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
            {/* <p>ca2125e8bddc4698c69a8ad8c94eaf70</p> */}
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
