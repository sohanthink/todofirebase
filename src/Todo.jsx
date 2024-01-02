import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, push, onValue } from "firebase/database";



const Todo = () => {

    // write data operation on firebase
    let [text, setText] = useState('')
    const db = getDatabase();
    let handleForm = (e) => {
        setText(e.target.value);
    }
    let handleAdd = () => {
        set(push(ref(db, 'newtodo')), {
            todotext: text,
        })
    }


    // Read data operation
    let [todo, setTodo] = useState([])
    const todoRef = ref(db, 'newtodo');
    useEffect(() => {
        onValue(todoRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push({ ...item.val() })
            })
            setTodo(arr)
        });
    }, [])

    return (
        <>
            <div className="todo">
                <div className="content">
                    <h2>To Do App</h2>
                    <input onChange={handleForm} placeholder='Add Something' value={text} />
                    <button onClick={handleAdd}>Add</button>
                </div>
                <div className="output">
                    <ul>
                        {
                            todo.map((item, index) => (
                                <li key={index} className='flex'>
                                    <div>{item.todotext}</div>
                                    <div className="buttons">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo