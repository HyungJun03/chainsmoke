import React from 'react';
import Card2 from "antd/lib/card";

import "../../CSS/Block/Block.css";


const Block = props => {
    return (
      <Card2
        className={`${props.index === 0 ? "genesis" : ""} block block-shadow`}
      >
        {/* Data */}
        
  
        {/* Previous Hash */}
        
        
        {/* Hash */}
      
  
        {/* Block, and Mine */}
        <div
          style={{
            marginTop: "27px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          
        </div>
    </Card2>
    );
  };
  
  export default Block;