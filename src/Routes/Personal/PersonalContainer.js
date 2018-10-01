import React, { Component } from "react";
import PropTypes from "prop-types";
import Personal from "./Personal";

class PersonalContainer extends Component {
  render() {
    return <Personal />;
  }
}

PersonalContainer.propTypes = {
  personal: PropTypes.array.isRequired
};

export default PersonalContainer;