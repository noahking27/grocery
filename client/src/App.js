import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import { Container } from "reactstrap";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="app-wrapper">
          <Route exact path="/" component={Login} />
          <Container className="list-wrapper">
            <Route exact path="/" component={List} />
          </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
