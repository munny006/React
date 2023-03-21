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
      <Person name="Rubel"></Person>
      <Person nayka="mahu"></Person>
      <Person></Person>
     
    </div>
  );
}

function Person(props){
  // console.log(props)
    return (
    
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayka}</p>
    </div>
    
    )
  
}


export default App;
