import React from "react";
import { useState } from "react";
import styles from "../styles/App.css"
import Counter from "./Count"

const PostList = (props) => {
    

    return (
        <div className="App">
            <h1 style={{textAlign: "center"}}>{props.title}</h1>
            {props.posts.map((item, index) => 
                <Counter number = {index+1} props = {item} key = {item.id}/>
            )}
        </div>
    )
}

export default PostList
