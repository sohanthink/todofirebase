import { useEffect, useState } from 'react'
import './App.css'
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";

function App() {

  const db = getDatabase();
  let [text, setText] = useState("");

  // write data on firebase
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
  // Read data on firebase
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

  // delete data realtime using firebase
  let handleDelete = (id) => {
    remove(ref(db, 'alltodo/' + id))
  }


  return (
    <>
      <div>
        <input placeholder='Type something to add' value={text} onChange={handleForm} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {
          todo.map((item, index) => (
            <li key={index} >
              {item.todotext}
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
