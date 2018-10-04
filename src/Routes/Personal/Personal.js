import React from "react";
import '../../CSS/Header.css'
import '../../CSS/Add/Add.css'
import '../../CSS/Add/Addbutten.css'
import Card from "antd/lib/card";
import AddInput from "../../JS/Add/AddInput";
import AddButton from "../../JS/Add/Addbutten";
import Block from "../../JS/Block/Block"
import '../../CSS/Block/Block.css'
import Add from "../../JS/Add/Add"
import PersonalMain from "./PersonalMain"


const Personal = () => {
    return (
        <div class="main">
        <PersonalMain />
        <div class="header2">
          
        <Block />
        
        </div>
        <Add />
        
        </div>
        
        
        
        
    )
}
export default Personal;