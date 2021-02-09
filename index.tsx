import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/header";
import RouterConfig from "./routes";
import "./style.scss";

const App = () => (
  <div className="app-root">
    <Router>
      <Header />
      <main>
        <RouterConfig />
      </main>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
