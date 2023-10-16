import { useForm } from "../Hooks/CustomHook/useForm"


const TodoAdd = ({handleNewTodo}) => {

  const {text, inputChange, inputResetForm} = useForm({
    text: ''
  })


  const formSubmit = (e) => {
    e.preventDefault()

    if ( text.length <= 1) return; 

    const newTodo = {
      id: new Date().getTime(),
      text: text,
      completed: true,

    }

    handleNewTodo(newTodo)
    inputResetForm()

  }

  return (
    <form onSubmit={formSubmit} >
    <input 
    type="text"
    placeholder='Tarea de hoy..'
    className='form-control' 
    onChange={inputChange}
    name="text"
    value={text}
    />

  <button
  type='submit'
  className='btn btn-primary mt-2'
  >
    Agregar Tarea
  </button>
  </form>
  )
}

export default TodoAdd
