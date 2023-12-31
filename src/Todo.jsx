import React from 'react'

const Todo = () => {


    return (
        <>
            <div className="todo">
                <div className="content">
                    <h2>To Do App</h2>
                    <input placeholder='Add Something' />
                    <button>Add</button>
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