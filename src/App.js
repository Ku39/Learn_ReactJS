import React from "react";
import { useState } from "react";
import Counter from "./components/Count"
import Propsuse from "./components/Propsuse"
import styles from "./styles/App.css"

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

// Пропсы
function App(){
    return(
        <div className="App">
            <Propsuse/>
        </div>
    )
}

// function App(){
//     return(
//         <div className="App">

//         </div>
//     )
// }
export default App;
