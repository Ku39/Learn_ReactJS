import React from "react";
import { useState } from "react";
import styles from "../styles/App.css"
import MyBotton from "./UI/Button/Mybutton";

const Counter = (props) => {

    return (
        <div className="post">
            <div className="post_context">
                <strong>{props.number}. {props.title.title}</strong>
                <div>
                    {props.title.body}
                </div>
            </div>
            <div className="btns">
                <MyBotton onClick={()=>props.remove(props.title)}>Delete</MyBotton>
            </div>
        </div>
    )
}

export default Counter
