import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import firebaseConfig from './config/firebaseConfig.js'
import Todo from './todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <Todo />
    </>
  </React.StrictMode>,
)
