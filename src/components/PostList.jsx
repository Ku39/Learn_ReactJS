import React from "react";
import { useState } from "react";
import styles from "../styles/App.css"
import Counter from "./Count"

const PostList = ({posts, title, remove}) => {
    return (
        <div className="App">
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((item, index) => 
                <Counter remove = {remove} number = {index+1} title = {item} key = {item.id}/>
            )}
        </div>
    )
}

export default PostList
