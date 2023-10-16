
// const sumar = function  (numero) {

//     return `Esta es una suma ${numero + 1}`
// }

// const suma_valores = (numero1, numero2) =>
//  `La suma es ${numero1 + numero2}`


// console.log(suma_valores(2,4))


const obtenerCursos  = () => {
    return {
        nombre: 'Curso de React',
        precio: 20000,
        duracion: 16
    }
}

const cursos = obtenerCursos()

console.log(cursos)
console.table(obtenerCursos())