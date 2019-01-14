import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/contact" component={Contact} exact />
                <Route path="/portfolio" component={Portfolio} exact />
                <Route path="/about" component={About} exact />
                <Route path="/" component={Landing} exact />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
