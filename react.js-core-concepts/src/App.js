import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name:'Dr.Mahfuz',job:'singer'}
const footballer = {name:'Munny' ,job:'Doctor'}
const singers= [
  {name:'Dr Mahfz',job:'singer'},
  {name:'Eva',job:'Teacher'},
  {name:'Salma',job:'Manush'},
  {name:'Kiram',job:'TTT'},
]
const singerstyle={
  color:'blue',
  backgroundColor:'white',
  padding:'20px'
}
function App() {
  const nayoks = ['Rubel','Kuber','Taksdf','nahiyan','salman']
  return (
    <div className="App">

    {
      nayoks.map(nayok => <li>Name :{nayok}</li>)
    }

    {
      nayoks.map(nayok =><Person name={nayok[4]}></Person>)
    }
    {
      singers.map(singers => <Person name={singers.job}></Person>)
    }

      {/* <Person name={nayoks[2]}></Person>
      <Person name={nayoks[0]}></Person>
      <Person></Person> */}
     
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
