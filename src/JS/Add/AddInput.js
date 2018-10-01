import React from 'react';
import PropTypes from 'prop-types';
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";

const MineInput = props => {
  return (
    <Input
      style={{ marginTop: "15px", paddingLeft: "10px", paddingRight: "10px", zIndex: "100" }}
      prefix={<Icon type="file-text" />}
      addonBefore={
        <span
          style={{ marginRight: "7px", marginLeft: "7px" }}
        >
          DATA
        </span>
      }
      defaultValue={props.data}
      
    />
  );
};

MineInput.propTypes = {
    data: PropTypes.string,
    changeData: PropTypes.func
};

export default MineInput;