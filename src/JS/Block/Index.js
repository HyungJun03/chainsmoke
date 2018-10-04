import React from "react";
import PropTypes from "prop-types";
import blockchain from "./Blockchain";

const timeStyle = {
  fontWeight: "300",
  fontSize: "8pt"
};

const Index = props => {
  const timestamp = (
    <span style={timeStyle}>on {new Date(props.timestamp).toUTCString()}</span>
  );
  return (
    <div style={{ fontSize: "24px", whiteSpace: "nowrap", overflow: "auto" }}>
      {props.index === 0 ? (
        <span style={{letterSpacing: "1px"}} className="genesis-index">GENESIS BLOCK</span>
      ) : (
        <span style={{letterSpacing: ".5px"}}>BLOCK #{props.index}</span>
      )}{" "}
      <span className={props.index === 0 ? "genesis-timestamp": ""}>{props.timestamp}</span>
    </div>
  );
};

Index.propTypes = {
  index: PropTypes.number
};



export default Index;