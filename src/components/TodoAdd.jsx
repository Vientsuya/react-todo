import { useState } from "react"

function TodoAdd({ setTasks }) {

  const [taskName, setTaskName] = useState('');

  const handleTextInput = event => setTaskName(event.target.value)

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        taskName: taskName,
        status: "pending"
      }
    ]);

    setTaskName("");
  }

  return (
    <div className="flex w-[512px]">
      <input type="text" value={taskName} onChange={(e) => handleTextInput(e)} />
      <button className="w-1/5 h-12" onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoAdd
