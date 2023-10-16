
import { useState,useMemo } from "react"

export const HookUseMemo = () => {
 const [numero, setNumero] = useState(0)


 const cuadrado = useMemo(() => {
    console.log('Calculando cuadrado...')
    return numero * numero 
 }, [numero])

  return (
    <>
    
    <div>Numero: {numero}</div>
    <div>Cuadrado: {cuadrado}</div>
    <button
    className="btn btn-primary"
    onClick={()=> setNumero( numero + 1)}
    >
        Incrementar numero
    </button>
    
    
    </>
  )
}
