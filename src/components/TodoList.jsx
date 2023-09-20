import TodoListItem from './TodoListItem'
function TodoList({ setTasks, tasks }) {
  return (
    <>
      <h2>Task List</h2>
      <ul>
        {[...tasks].reverse().map((task) => (
          <TodoListItem task={task} setTasks={setTasks} key={task.id} />
        ))}
      </ul>
    </>
  )
}

export default TodoList;
