import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>NOT FOUND</main>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
