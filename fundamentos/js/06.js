
const numeros = [1,2,3,4,5,6]

//Agregar elementos
// numeros.push(7) //No utilizarlo

let nuevoArreglo  = [7, ...numeros]

const arregloMap = nuevoArreglo.map( (n) => {
    return 'Hola mundo'
})



console.log(nuevoArreglo)    