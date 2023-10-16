

export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case 'ADD TODO':
            return [...initialState, action.payload]

        case 'REMOVE TODO':
            return initialState.filter( todo => todo.id !== action.payload)

        case  'COMPLETE TASK':
            return initialState.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

        default:
            return initialState

    }

}