import { useState } from 'react'
import './App.css'
import { getDatabase, ref, set } from "firebase/database";

function App() {

  const db = getDatabase();



  let [text, setText] = useState();

  let handleForm = (e) => {
    setText(e.target.value);
  }
  let handleClick = () => {
    set(ref(db, "alltodo"), {
      todotext: text,
    })
  }

  return (
    <>
      <input placeholder='Type something to add' onChange={handleForm} />
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default App
