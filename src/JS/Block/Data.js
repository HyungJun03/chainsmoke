import React from "react";
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";


const Data = () => {
    return (
      <Input
      style={{ marginBottom: "20px" }}
      prefix={<Icon type="file-text" />}
      addonBefore={
        <span style={{ marginRight: "7px", marginLeft: "7px" }}>DATA</span>
      }
      
      
      />
    );
  }

  export default Data;