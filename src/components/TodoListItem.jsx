function TodoListItem({ task, setTasks }) {
  const textColor = task.status == "pending" ? "text-yellow-500" : "text-green-500";

  const makeTaskDone = (taskId) => {
    setTasks((prev) => {
      const taskIndex = prev.findIndex((task) => task.id === taskId);

      // make sure the task exists
      if (taskIndex !== -1) {
        const updatedTasks = [...prev];
        updatedTasks[taskIndex].status = "completed"

        return updatedTasks;
      }
      // if task doesnt exist return the old tasks
      return prev;
    })
  }

  return (
    <li className="list-none">
      <div className="flex items-center">
        <div className={`border border-[rgba(255,255,255,0.3)] border-solid rounded-md p-1 mr-2 ${textColor}`}>
          {task.status}
        </div>
        <div className="mr-2">
          {task.taskName}
        </div>
        <div>
          <button onClick={() => makeTaskDone(task.id)}>Complete</button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem;
