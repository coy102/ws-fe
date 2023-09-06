import { useCallback, useEffect, useMemo, useState } from 'react'

import useTodoStore from '~/stores/todo'
import Counter from '../Memoization/components/Counter'
import TodoList from '../Memoization/components/TodoList'
import { constructTodosFilter, constructTodosStatistic } from '../Memoization/helper'

const Memoization = () => {
  const [count, setCount] = useState(0)

  const { fetchTodos, handleClickFilter, todos, filter, handleToggleComplete } = useTodoStore(
    (state) => state,
  )

  const memoTodos = useMemo(() => constructTodosFilter(todos, filter), [todos, filter])
  const memoTodosStatistic = useMemo(() => constructTodosStatistic(todos), [todos])

  const handleClickIncrement = useCallback(() => setCount(count + 1), [count])

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <Counter counter={count} handleClickIncrement={handleClickIncrement} />
      <hr />
      <TodoList
        handleClickFilter={handleClickFilter}
        handleToggleComplete={handleToggleComplete}
        todos={memoTodos}
        statistic={memoTodosStatistic}
      />
    </>
  )
}

export default Memoization
