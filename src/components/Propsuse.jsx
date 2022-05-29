import React from "react";
import { useState } from "react";

const Counter = () => {
    const [likes, setstate] = useState(0);
    function plus(){
        setstate(likes+1)
    }
    function minus(){
        setstate(likes-1)
    }
    return (
        <div className="App">
            <h1>{likes}</h1>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    );
}

export default Counter
