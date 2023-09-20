import { useState } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'Default hello task',
      status: 'pending'
    }
  ])

  return (
    <>
      <div className='flex items-center flex-col m-12'>
        <TodoAdd setTasks={setTasks} />
        <TodoList tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
