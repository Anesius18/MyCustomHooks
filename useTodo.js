import  { useEffect, useReducer } from 'react'
import { todoReducer } from '../useReducer/todoReducer'

export const useTodo = () => {
    const initialState = []
 
    const init = () => {
      return JSON.parse(localStorage.getItem('todos')) || []
    }
  
    const [stateTodo, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const deleteTodo = (todo) => {
      
      dispatchTodo({
        type: "Delete Todo",
        payload: todo
       })
    }

const todosCount= stateTodo.length

const pendingTodosCount =  stateTodo.filter(todo => !todo.done).length


    const handleToggle = (id) => {
      
      dispatchTodo({
        type: "ToggleTodo",
        payload: id
       })
       console.log(id)
    }
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(stateTodo))
  }, [stateTodo])
  
  
    const handleNewTodo = (todo) =>{
       const action = {
        type: "Add Todo",
        payload: todo
       }
       dispatchTodo(action)
   }
  
  
    return {
        handleToggle,
        handleNewTodo,
        deleteTodo,
        ...stateTodo,
        stateTodo, 
        todosCount,
        pendingTodosCount

    }
}
