import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route path="/contact" component={Contact} exact />
              <Route
                path="/portfolio/:projectname"
                component={ProjectPage}
                exact
              />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/about" component={About} exact />
              <Route path="/" component={Landing} exact />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
