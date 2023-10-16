import { useState, useEffect } from "react"


export const UseEffect = () => {
  const [value, setValue] = useState(0)


  const saludo = () => {
    console.log('Hola desde mi funcion saludo')
  }

  saludo()

  useEffect(()=> {
    console.log('Hola desde mi useEffect')
  }, [])


  return (
    <div>
        <h1>Value: {value}</h1>
        <button
        className="btn"
        onClick={()=> setValue(value + 1)}
        >
         Aumentar
        </button>
    </div>
  )
}
