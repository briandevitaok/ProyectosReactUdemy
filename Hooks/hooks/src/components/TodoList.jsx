
import TodoItem from './TodoItem'

const TodoList = ({todos = [], handleDeleteTodo, handleTareaCompletada}) => {


  return (
    <ul className='list-group'>
    {
      todos.map( todo =>  (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleTareaCompletada={handleTareaCompletada} />
      ))
    }
 </ul>
  )
}

export default TodoList
