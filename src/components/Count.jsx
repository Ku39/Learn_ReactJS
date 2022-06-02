import React from "react";
import { useState } from "react";
import styles from "../styles/App.css"

const Counter = (props) => {

    return (
        <div className="post">
            <div className="post_context">
                <strong>{props.number}. {props.props.title}</strong>
                <div>
                    {props.props.body}
                </div>
            </div>
            <div className="btns">
                <button>Delete</button>

            </div>
        </div>
    )
}

export default Counter
