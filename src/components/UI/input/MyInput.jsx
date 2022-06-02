import React from "react";
import classes from "./myinput.module.css"
const MyInput = (props) => {
    
    return (
        <input className={classes.MyInput} {...props}>
        </input>
    )
}

export default MyInput
