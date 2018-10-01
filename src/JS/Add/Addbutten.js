import React from 'react';
import Button from "antd/lib/button";
import PropTypes from 'prop-types';
import "../../CSS/Add/Addbutten.css";

const AddButton = props => {
  return (
    <Button
      className="mine-button animate"
      icon="plus"
      onClick={() => {
        
      }}
    >
      <span 
        style={{
          marginLeft: "7.5px",
          color: "white"
        }}
      >
        ADD NEW BLOCK
      </span>
    </Button>
  );
};

AddButton.propTypes = {
  newBlockData: PropTypes.string,
  peer: PropTypes.string
};





export default AddButton;