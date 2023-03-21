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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
         <div className="container">
          <h3>Hello Dude . React.How are You?</h3>
         </div>
         <div className="music">
          <p>Name :{number}</p>
          <p style={singerstyle}>Singer : {singer.name} {singer.job}</p>
          <p>Footballer : {footballer.name}{footballer.job}</p>
         </div>


       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
