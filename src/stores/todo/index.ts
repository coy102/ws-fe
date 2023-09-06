import { create } from 'zustand'
import axios from 'axios'
import { immer } from 'zustand/middleware/immer'

interface Todo {
  id: number
  todo: string
  completed: boolean
}

interface State {
  todos: Todo[]
  filter: 'All' | 'In progress' | 'Completed'
}

interface Action {
  fetchTodos: () => void
  handleClickFilter: (val: 'All' | 'In progress' | 'Completed') => void
  handleToggleComplete: (id, completed) => void
}

const useTodoStore = create(
  immer<State & Action>((set) => ({
    todos: [],
    filter: 'All',
    fetchTodos: async () => {
      const { data } = await axios.get('https://dummyjson.com/todos')
      set((prev) => {
        prev.todos = data.todos
      })
    },
    handleClickFilter: (val) => {
      set((prev) => {
        prev.filter = val
      })
    },
    handleToggleComplete: (id, completed) => {
      set((prev) => {
        const todoIndex = prev.todos.findIndex((f) => f.id === id)

        if (todoIndex >= 0) {
          prev.todos[todoIndex].completed = !completed
        }
      })
    },
  })),
)

export default useTodoStore
