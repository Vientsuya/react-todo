import TodoListItem from './TodoListItem'
function TodoList({ tasks }) {
  return (
    <>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TodoListItem taskName={task.taskName} key={task.id}/>
        ))}
      </ul>
    </>
  )
}

export default TodoList;
