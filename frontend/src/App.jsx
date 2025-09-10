// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useEffect, useState } from "react";
import './App.css'

function App() {
   const [tasks, settasks] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/api/tasks")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched tasks:", data);
      settasks(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  return (
    <>
      <header><h1>Task Tracker App</h1></header>
      <div>
        <ul>
          {tasks.map(task => (<li key={task._id}>{task.title}</li>))}
        </ul>
      </div>
    </>
  )
}

export default App
