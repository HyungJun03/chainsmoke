import React from "react";

import Tag from "antd/lib/tag";


const Hash = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        maxWidth: "100%",
        overflow: "auto"
      }}
      
    >
      <div style={{ marginRight: "15px" }}>HASH</div>
      <Tag
        
        style={{
          display: "block",
          fontSize: "9pt",
          fontFamily: "Courier New",
          cursor: "default",
          maxWidth: "100%",
          overflow: "auto"
        }}
      >
       
      </Tag>
    </div>
  );
};




export default Hash;