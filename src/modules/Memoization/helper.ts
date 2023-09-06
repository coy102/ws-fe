export const constructTodosStatistic = (todos: any[] = []) => {
  if (todos.length === 0)
    return {
      totalTodos: 0,
      completedTodos: 0,
      completionPercentage: 0,
    }

  console.log('compute constructTodosStatistic')

  const totalTodos = todos?.length || 0

  const completedTodos = todos?.filter((todo) => todo.completed)?.length
  const completionPercentage = (completedTodos / totalTodos) * 100

  return {
    totalTodos,
    completedTodos,
    completionPercentage,
  }
}

export const constructTodosFilter = (todos: any[] = [], filter: string) => {
  if (todos.length === 0) return []

  console.log('compute constructTodosFilter')

  if (filter === 'Completed') return todos.filter((f) => f.completed)
  if (filter === 'In progress') return todos.filter((f) => !f.completed)

  // Else All
  return todos
}
