
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
    fetch('',)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    return (
      <>
        <h1>Users Management System</h1>
        <h3>Numbers of users : {users.length}</h3>
        <form onSubmit={handleAddUser}>
          <input type='text' name='name' />
          <br />
          <input type='email' name='email' />

          <br />
          <input type='submit' name='submit' value="Add User" />
        </form>
        <div>
          {
            users.map(user => <p key={user.id} > {user.id} : {user.name} : {user.email}</p>)
          }
        </div>


      </>
    )
  }

  export default App
