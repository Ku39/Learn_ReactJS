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

import PostForm from "./components/postForm";
import MySelect from "./components/UI/Select/MySelect";

function App(){
    const [posts, setPosts] = useState([
        {id:1, title:"aa", body:"DJavascript is language programm"},
        {id:2, title:"bb", body:"AJavascript is language programm"},
        {id:3, title:"cc", body:"RJavascript is language programm"},
        {id:4, title:"dd", body:"TJavascript is language programm"},
        
    ])

    const [SelectedSort, setSelectedSort] = useState('')

    const createPost = (NewPost)=>{
        setPosts([...posts, NewPost])
        // console.log(NewPost)
    }

    const DeltePost = (post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return(
        <div className="App">
            <PostForm create ={createPost}/>
            <hr style={{margin: "15px 0"}}></hr>
            <MySelect
                value={SelectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value:'title', name:'По названию'}, 
                    {value:'body', name:'По описанию'}
                ]}
            />
            {posts.length!==0
                ? <PostList remove={DeltePost} posts={posts} title={"Посты про JavaScript"}/>
                : <h1 style ={{textAlign: "center"}}>Посты не найдены</h1>
            }
            
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
