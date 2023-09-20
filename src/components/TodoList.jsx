import TodoListItem from './TodoListItem'
function TodoList({ tasks }) {
  return (
    <>
      <h2>Task List</h2>
      <ul>
        {[...tasks].reverse().map((task) => (
          <TodoListItem taskName={task.taskName} taskStatus={task.state} key={task.id} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;
