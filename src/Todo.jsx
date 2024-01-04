import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";



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
        }).then(
            console.log('added'),
            setText('')
        )
    }


    // Read data operation
    let [todo, setTodo] = useState([])
    const todoRef = ref(db, 'newtodo');
    useEffect(() => {
        onValue(todoRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push({ ...item.val(), id: item.key })
            })
            setTodo(arr)
        });
    }, [])



    // data delete operation
    let handleDelete = (id) => {
        remove(ref(db, 'newtodo/' + id)).then(console.log('deleted'))
    }


    // data edit operation
    let [toggleBtn, setToggleBtn] = useState(false)
    let [todoId, setTodoId] = useState()
    let handleEdit = (item) => {
        setText(item.todotext)
        setToggleBtn(true)
        setTodoId(item.id)
    }
    let handleUpdate = () => {
        update(ref(db, "newtodo/" + todoId), {
            todotext: text
        }).then(
            setText(''),
            console.log('updated'),
            setToggleBtn(false)
        )
    }

    return (
        <>
            <div className="todo">
                <div className="content">
                    <h2>To Do App</h2>
                    <input onChange={handleForm} placeholder='Add Something' value={text} />
                    {
                        toggleBtn
                            ?
                            <button onClick={handleUpdate}>Update</button>
                            :
                            <button onClick={handleAdd}>Add</button>
                    }
                </div>
                <div className="output">
                    <ul>
                        {
                            todo.map((item, index) => (
                                <li key={index} className='flex'>
                                    <div>{item.todotext}</div>
                                    <div className="buttons">
                                        <button onClick={() => handleEdit(item)}>Edit</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
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