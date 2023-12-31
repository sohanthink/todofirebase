import { useEffect, useState } from 'react'
import './App.css'
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";

function App() {

  const db = getDatabase();
  let [text, setText] = useState("");

  // write data on firebase ===================
  let handleForm = (e) => {
    setText(e.target.value);
  }
  let handleClick = () => {
    set(push(ref(db, "alltodo")), {
      todotext: text,
    })
    setText("")
  }

  let [todo, setTodo] = useState([]);
  // Read data on firebase ======================
  const todoRef = ref(db, 'alltodo');
  useEffect(() => {
    onValue(todoRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key })
      })
      setTodo(arr)
    });
  }, [])

  // delete data realtime using firebase =========
  let handleDelete = (id) => {
    remove(ref(db, 'alltodo/' + id))
  }

  // Update data realtime using firebase =========

  let [todoId, setTodoId] = useState()

  let handleUpdate = (item) => {
    setTodoId(item.id);
    setToggleBtn(true)
    setText(item.todotext)
  }

  let [toggleBtn, setToggleBtn] = useState(false);
  let handleEdit = () => {
    console.log(todoId);
    console.log(text);
    update(ref(db, 'alltodo/' + todoId), {
      todotext: text,
    }).then(() => {
      setText('');
      setToggleBtn(false);
    })
  }


  let handleAllDelete = () => {
    remove(ref(db, 'alltodo/'))
  }


  return (
    <>
      <div>
        <input placeholder='Type something to add' value={text} onChange={handleForm} />
        {
          toggleBtn
            ?
            <button onClick={handleEdit}>Edit</button>
            :
            <button onClick={handleClick}>Add</button>
        }
      </div>
      <button onClick={handleAllDelete}>All Delete</button>
      <ul>
        {
          todo.map((item, index) => (
            <li key={index} >
              {item.todotext}
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleUpdate(item)}>Update</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
