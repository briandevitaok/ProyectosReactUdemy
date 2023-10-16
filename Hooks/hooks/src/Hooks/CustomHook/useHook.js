import { useState} from 'react'


export function useContador (initialValue) {
    const [count, setCount] = useState(initialValue)

    const incrementar = () => setCount(count + 1)
    const decrementar = () => setCount(count - 1)


    return [count, incrementar, decrementar]
}