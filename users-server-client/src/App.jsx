
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
  },[])


  //button work
  const handleAddUser =event =>{
    event.preventDefault();
    const form = event.target;
    const name =  form.name.value;
    const email =form.email.value;
    const password =form.password.value;
    const user = {name,email,password}
    console.log(user)
  }

  return (
    <div className="App">
     
      <h1>Users Server system</h1>
      <h3>Numbers of Users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name'/><br/><br/>
        <input type='email' name='email'/><br/><br/>
        <input type='password' name='password'/><br/><br/>
        <input type='submit' value="Add User" />
      </form>
      <div>
        {
          users.map(user => <p key = {user.id}>{user.id} :  {user.name}: {user.email}</p>)
        }
      </div>
     
    </div>
  )
}

export default App
