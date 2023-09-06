import { useCallback, useMemo, useState } from 'react'
import useAxios from '~/utils/useAxios'
import { constructTodosFilter, constructTodosStatistic } from './helper'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

const Memoization = () => {
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('All')

  const { data, setData } = useAxios('https://dummyjson.com/todos')

  const memoTodosStatistic = useMemo(() => constructTodosStatistic(data?.todos), [data])

  const memoTodos = useMemo(() => constructTodosFilter(data?.todos, filter), [data, filter])

  const handleClickFilter = useCallback((val: string) => setFilter(val), [])

  const handleClickIncrement = useCallback(() => setCount((prev) => prev + 1), [])

  const handleToggleComplete = useCallback((id, completed) => {
    setData((prev) => {
      const todoIndex = prev.data.todos.findIndex((f) => f.id === id)

      if (todoIndex >= 0) {
        prev.data.todos[todoIndex].completed = !completed
      }
    })
  }, [])

  return (
    <>
      <Counter counter={count} handleClickIncrement={handleClickIncrement} />
      <hr />
      {memoTodosStatistic.totalTodos > 0 && (
        <TodoList
          todos={memoTodos}
          statistic={memoTodosStatistic}
          handleClickFilter={handleClickFilter}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  )
}

export default Memoization
