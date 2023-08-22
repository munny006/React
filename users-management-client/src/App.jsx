
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [users,serUsers] = useState([]);
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res =>res.json())
  .then(data =>serUsers(data));
},[])

  return (
    <div className="App">
      
      <h1>Users Management system</h1>
      <h3>Number of users : {users.length}</h3>
      
    </div>
  )
}

export default App
