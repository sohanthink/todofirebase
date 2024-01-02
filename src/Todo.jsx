import React, { useState } from 'react'
import { getDatabase, ref, set, push } from "firebase/database";



const Todo = () => {

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
                        <li className='flex'>
                            <div>Something Added</div>
                            <div className="buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li className='flex'>
                            <div>Something Added</div>
                            <div className="buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo