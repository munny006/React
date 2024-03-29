
import './App.css'

function App() {
  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name  = form.name.value;
    const email  = form.email.value;
    const user  = {name,email};
    console.log(user);
    fetch('http://localhost:5000/users',{
      method :'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('Users added successfully');
        form.reset();
      }
    })

  }
 

  return (
    <div className="App">
    
      <h1>Simple Crud Project</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" /><br/><br/>
        <input type="email" name="email" /><br/><br/>
        <input type="submit" value="Add User" /><br/><br/>
       
      </form>
      
    </div>
  )
}

export default App
