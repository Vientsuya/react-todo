function TodoListItem({ taskName, taskStatus }) {
  const textColor = taskStatus == "pending" ? "text-yellow-500" : "text-green-500";

  return (
    <li className="list-none">
      <div className="flex items-center">
        <div className={`border border-[rgba(255,255,255,0.3)] border-solid rounded-md p-1 mr-2 ${textColor}`}>
          {taskStatus}
        </div>
        {taskName}
      </div>
    </li>
  )
}

export default TodoListItem;
