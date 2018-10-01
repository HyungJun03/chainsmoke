import React from "react";
import '../../CSS/Header.css'
import '../../CSS/Add/Add.css'
import '../../CSS/Add/Addbutten.css'
import Card from "antd/lib/card";
import AddInput from "../../JS/Add/AddInput";
import AddButton from "../../JS/Add/Addbutten"; 


const Personal = () => {
    return (
        <div class="main">
        <div class="header2">
          
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
        
        </div>
        </div>
    )
}
export default Personal;