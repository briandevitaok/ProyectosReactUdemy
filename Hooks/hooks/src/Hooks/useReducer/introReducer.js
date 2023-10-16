

const initialState = [
    {
        id: 1,
        texto: 'Estudiar React', 
        completed: false,
    }
]


const todosReducer = ( state = initialState, action = {}  ) => {

        if (action.type === '[TODO]ADD TODO') {
            return [...state, action.payload]
        }

    return state
}

let todos = todosReducer()


const newTodo = {
    id: 2,
    texto: 'Sacar al perro',
    completed: true,
}

const newTodoAction = {
    type: '[TODO]ADD TODO',
    payload:newTodo,

}

let todosApp = todosReducer(initialState, newTodoAction)
console.log(todosApp)