import React, { Component } from 'react';
import '../../CSS/Add/Add.css'
import '../../CSS/Add/Addbutten.css'
import Card from "antd/lib/card";
import AddInput from "./AddInput";
import AddButton from "./Addbutten";


class Add extends Component {
    render() {
        return (
<Card 
        className="mine is-valid mine-shadow">
        
        <div className="items">
          <AddInput
            changeData={this.changeData}
          />
          <AddButton
            
          />


        </div>
        
        </Card>
        );
}
}

export default Add;