import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name:'Dr.Mahfuz',job:'singer'}
const footballer = {name:'Munny' ,job:'Doctor'}
const singerstyle={
  color:'blue',
  backgroundColor:'white',
  padding:'20px'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
     
    </div>
  );
}

function Person(){
    return (
    
    <div>
      <h1>Sakib Al Hasan</h1>
      <p>Munny</p>
    </div>
    
    )
  
}


export default App;
