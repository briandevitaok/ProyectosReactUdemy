
import { useReducer } from 'react'
import './App.css'
import { todoReducer } from './Hooks/useReducer/todoReducer'
import TodoItem from './components/TodoItem'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { useEffect } from 'react'

const initialState = [

]


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [] 
}


function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
   

    useEffect(() => {

      localStorage.setItem('todos', JSON.stringify(todos))

    },[todos])


    const handleNewTodo = (todo) => {
      const action = {
        type: 'ADD TODO', 
        payload: todo
      }

      dispatch(action)
    }


    const handleDeleteTodo = ( id ) => {
      dispatch({
        type: 'REMOVE TODO',
        payload: id
      })
    }


    const handleTareaCompletada = (id) => {
        dispatch({
          type: 'COMPLETE TASK',
          payload: id
        })
    }

  return (
   <>
    <h1>Todos: {todos.length} <small> Pendientes: {todos.filter(todo => !todo.completed).length}</small></h1>
     <hr />

     <div className='row'>
        <div className='col-7'>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleTareaCompletada={handleTareaCompletada}/>
        </div>

        <div className='col-5'>
              <h4>Agregar Tarea</h4>
              <hr />
              <TodoAdd handleNewTodo={handleNewTodo}/>           
        </div>

     </div>
   
   </>
  )
}

export default App
