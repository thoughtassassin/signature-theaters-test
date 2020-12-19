import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Products from "../components/Products";
import Contact from "../components/Contact";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundVideo />
        <Service />
        <Projects />
        <Products />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
