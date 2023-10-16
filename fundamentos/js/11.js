


const url = 'https://jsonplaceholder.typicode.com/comments'

const api = async () => {
    const respuesta = await fetch(url)
    console.log('Haciendo respuesta')
    const resultado = await respuesta.json()
    console.log('Haciendo resultado')
    resultado.forEach (comentario => {
       
    })  
    }

api()


// const url = 'https://jsonplaceholder.typicode.com/comments'

// const api = () => {fetch(url)
//     .then((result)=>{
//     return result.json()
//     })
//     .then((result)=> {
//         result.forEach(comment => {
//             console.log(comment)
//         })
//     })}

// api()