import React from "react";
import { useState } from "react";
import Propsuse from "./components/Propsuse"
import styles from "./styles/App.css"
import PostList from "./components/PostList";

// Работа с состояниями

// function App() {
//     const [likes, setstate] = useState(0);
      
//     function plus(){
//         setstate(likes+1)
//     }

//     function minus(){
//         setstate(likes-1)
//     }
//     return (
//         <div className="App">
//             <h1>{likes}</h1>
//             <button onClick={plus}>Plus</button>
//             <button onClick={minus}>Minus</button>
//         </div>
//     );
// }

// Изменение инпута
// function App(){
//     const [value, setvalues] = useState('Текст в инпуте')
//     return(
//         <div className="App">
//             <h1>{value}</h1>
//             <input type="text" value={value} onChange={event => setvalues(event.target.value)}/>
//         </div>
//     )
// }

// Применение компонентов
// function App(){
//     return(
//         <div>
//             <Counter/>
//             <Counter/>
//             <Counter/>
            
//         </div>
//     )
// }

// Пропсы arg= название пропса
// function App(){
//     return(
//         <div className="App">
//             <Propsuse arg={{name:"asd"}}/>
//         </div>
//     )
// }

// Много пропсов в массиве
// function App(){
//     const[arr, setarr] = useState([
//         {name:"one"},
//         {name:"two"},
//         {name:"three"},
//         {name:"for"},
//     ]);

//     return(
//         <div className="App">
//             {arr.map((item) => <Propsuse arg={item}/>)}
//         </div>
//     )
// }
import MyBotton from "./components/UI/Button/Mybutton";
import MyInput from "./components/UI/input/MyInput";

function App(){
    const [posts, setPosts] = useState([
        {id:1, title:"Javascript", body:"Javascript is language programm"},
        {id:2, title:"Javascript", body:"Javascript is language programm"},
        {id:3, title:"Javascript", body:"Javascript is language programm"},
        {id:4, title:"Javascript", body:"Javascript is language programm"},
        
    ])

    const [inp, setInp] = useState({
        title: "",
        body: ""
    })
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts(
            [...posts, {...inp, id:Date.now()}]
        )
        setInp({title: "", body:""})
    }

    return(
        <div>
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
            <PostList posts={posts} title={"Посты про JavaScript"}/>
        </div>
        
    )
}
// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
export default App;
