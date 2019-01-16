import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>Portfolio</main>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
