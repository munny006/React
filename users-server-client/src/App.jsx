
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
  },[])

  return (
    <div className="App">
     
      <h1>Users Server system</h1>
      <h3>Numbers of Users : {users.length}</h3>
     
    </div>
  )
}

export default App
