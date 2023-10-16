import { useState, useEffect } from "react"


export const MultiplesEffects = () => {
  const [value, setValue] = useState(0)
  const [segundoValue, setSegundoValue] = useState(0)



  useEffect(()=> {
    console.log('Hola desde mi primer useEffect')
  }, [value])
  
  useEffect(() => {
   //Codigo...
   console.log('Hola desde mi segundo useEffect')
   
  }, [segundoValue])
  

  return (
    <div>
        <h1>Primer Value: {value}</h1>
        <button
        className="btn"
        onClick={()=> setValue(value + 1)}
        >
         Primer boton
        </button>

        <h1>Segundo value: {segundoValue}</h1>
        <button
        className="btn"
        onClick={()=> setSegundoValue(segundoValue + 1)}
        >
         Segundo boton
        </button>
    </div>
  )
}
