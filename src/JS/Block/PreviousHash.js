import React from "react";
import Tag from "antd/lib/tag";

import { hashColor } from "./Hash.js";
import Blockchain from "./Blockchain.js";

const PreviousHash = () => {
  

  return (
    <div
      
      style={{
        marginBottom: "7px",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        maxWidth: "100%",
        overflow: "auto"
      }}
    >
      <div style={{ whiteSpace: "nowrap" }}>PREVIOUS HASH</div>
      <Tag
        
        style={{
          fontSize: "8pt",
          float: "right",
          fontFamily: "Courier New",
          cursor: "default",
          display: "block",
          background: "none",
          borderColor: "transparent"
        }}
      >
        {Blockchain.PreviousHash}
      </Tag>
    </div>
  );
};


export default PreviousHash;