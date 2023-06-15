import React, { useState } from 'react' 
import './App.css'
import TaskList from './componentes/TaskList'
import Title from './componentes/header'
import Task from './componentes/Task'

function App () {
  return <div className='App'>
      <Title />
      <input />
    <button>Agg</button>
    <TaskList />
    <Task />
  </div>
}

export default App;