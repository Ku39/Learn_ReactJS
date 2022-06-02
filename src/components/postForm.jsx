import React from "react";
import MyBotton from "../components/UI/Button/Mybutton";
import MyInput from "../components/UI/input/MyInput";
import { useState } from "react";

const PostForm = ({create}) => {

    const [inp, setInp] = useState({
        title: "",
        body: ""
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const NewPost = {
            ...inp, id: Date.now()
        }
        create(NewPost)
        setInp({title: "", body:""})
    }

    return(
        <form>
            <MyInput 
                value={inp.title} 
                onChange={e => setInp({...inp, title: e.target.value})} 
                type="text" 
                placeholder="Название поста" 
            />
            <MyInput 
                value={inp.body} 
                onChange={e => setInp({...inp, body: e.target.value})}  
                type="text" 
                placeholder="Описание поста" 
            />
            <MyBotton onClick = {addNewPost}>Создать пост</MyBotton>
        </form>
    )
}

export default PostForm
