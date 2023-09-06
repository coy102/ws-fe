import { memo } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, statistic, handleClickFilter, handleToggleComplete }) => {
  console.log('re render todo list')

  return (
    <>
      <button onClick={() => handleClickFilter('All')}>All </button>
      <button onClick={() => handleClickFilter('Completed')}>Completed </button>
      <button onClick={() => handleClickFilter('In progress')}>In Progress </button>

      <div>
        Completed: {statistic?.completedTodos} ({Math.round(statistic?.completionPercentage)}%)
      </div>
      <div>Total Todo: {statistic?.totalTodos}</div>
      <ul>
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} handleToggleComplete={handleToggleComplete} />
        ))}
      </ul>
    </>
  )
}

export default memo(TodoList) // change this to memo
