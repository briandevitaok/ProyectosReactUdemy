import { useEffect, useState } from 'react'

export const FetchData = () => {
    const [users, setUsers] = useState([])
    console.log(users)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
      //Codigo...
      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const users = await response.json();
            setUsers(users)
        } catch (error) {
            console.log(error)
        }
      }
      fetchData()
    }, [])
    

  return (
    <section>
        <h3>Users</h3>
        <ul>
            {
                users.map((user)=> {
                    const {name, id, email} = user
                    return <li key={id}>{email}</li>
                })
            }
        </ul>
    </section>
  )
}
