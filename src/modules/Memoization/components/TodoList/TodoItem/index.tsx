import { memo } from 'react'

const TodoItem = ({ todo, handleToggleComplete }: any) => {
  return (
    <li onClick={() => handleToggleComplete(todo.id, todo.completed)}>
      {todo.completed ? <s>{todo.todo}</s> : todo.todo}
    </li>
  )
}

export default memo(TodoItem)
