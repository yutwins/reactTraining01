// import React, {useEffect, useState} from 'react';
// import { ColorfulMessage } from './components/ColorfulMessage';

// const App = () => {
//     const onClickCountUp = () => {
//         setNum(num + 1) // setNumはnumの値を更新する関数
//     };
//     console.log("最初");
//     const [num, setNum] = useState(0);
//     const [faceShowFlag, setFaceShowFlag] = useState(true);

//     const onClickSwitchShowFlag = () => {
//         setFaceShowFlag(!faceShowFlag);
//     };

//     useEffect(() => {
//         if (num > 0) {
//             if (num % 3 === 0) {
//                 faceShowFlag || setFaceShowFlag(true);
//             } else {
//                 faceShowFlag && setFaceShowFlag(false);
//             }
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [num]);


//     return (
//         <>
//             <h1 style={{color: 'red'}}>Hello</h1>
//             <ColorfulMessage color='blue'>
//                 お元気ですか？
//             </ColorfulMessage>
//             <ColorfulMessage color='pink' message='元気です'>
//                 元気です！
//             </ColorfulMessage>
//             <button onClick={onClickCountUp}>カウントアップ</button>
//             <br />
//             <button onClick={onClickSwitchShowFlag}>on/off</button>
//             <p>{num}</p>
//             {faceShowFlag && <p>😆😐</p>}
//         </>
//     );
// }

// export default App;

// TodoApp制作
import React, { useState } from 'react';
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === '') return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    return (
        <>
            <InputTodo  
            todoText={todoText} 
            onChange={onChangeTodoText} 
            onClick={onClickAdd}
            disabled={incompleteTodos.length >= 5}
            />
            {incompleteTodos.length >= 5 && (
            <p style={{color: 'red'}}>登録できるTodoは5個までだよ〜。消化しよう！</p>
            )}
            <IncompleteTodos 
            todos={incompleteTodos}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
            />
            <CompleteTodos 
            todos={completeTodos}
            onClickBack={onClickBack}
            />
        </>
    );
}
