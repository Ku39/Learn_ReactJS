import React from "react";
import classes from "./Mybutton.module.css"

const MyBotton = (props) => {
    
    return (
        <button className={classes.mybtn} {...props}>
            {props.children}
        </button>
    )
}

export default MyBotton
