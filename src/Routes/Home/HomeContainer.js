import React, { Component } from "react";
import PropTypes from "prop-types";
import Home from "./Home";

class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}

HomeContainer.propTypes = {
  home: PropTypes.array.isRequired
};

export default HomeContainer;