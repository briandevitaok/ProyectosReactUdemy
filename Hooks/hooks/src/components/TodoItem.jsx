

const TodoItem = ({todo, handleDeleteTodo, handleTareaCompletada}) => {


  return (
    <li className='list-group-item d-flex justify-content-between'>
    <span className={`'align-self-center' ${(todo.completed) ? 'text-decoration-line-through' : '' } `} onClick={ () => handleTareaCompletada(todo.id)} > {todo.text}</span>
    <button className='btn btn-danger' onClick={() => handleDeleteTodo(todo.id)}> Eliminar</button>
    </li>
  )
}

export default TodoItem
