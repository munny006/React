
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [users,serUsers] = useState([]);
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res =>res.json())
  .then(data =>serUsers(data));
},[])


//button setting

const handleAddUser = event => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name,email}
  console.log(user);
  fetch('http://localhost:5000/users',{
      method:'POST',
      headers : {
        'content-type' : 'application/json'

      },
      body:JSON.stringify(user)
  })
  .then(res =>res.json())
  .then(data=>{
    console.log('inside post response',data)
  })

}

  return (
    <div className="App">
      
      <h1>Users Management system</h1>
      <h3>Number of users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input name='name' type='text'/><br/><br/>
        <input name='email' type='email'/><br/><br/>
        <input name='' type='submit' value='Add User'/><br/><br/>
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>
            {user.id} :{user.name} : {user.email}
          </p>)
        }
      </div>
      
    </div>
  )
}

export default App
