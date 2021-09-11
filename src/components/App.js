import React from "react";
import Navbar from "./Nav/Navbar";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Stoper from "./Stoper";
import Counter from "./Counter";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Montserrat",
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/stoper">
            <Stoper />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
