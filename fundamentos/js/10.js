
const url = 'https://jsonplaceholder.typicode.com/comments'

const api = () => {fetch(url)
    .then((result)=>{
    return result.json()
    })
    .then((result)=> {
        result.forEach(comment => {
            console.log(comment)
        })
    })}

api()