import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const products = [
    {name:'latopfff',price:'156000'},
    {name:'mobilerr',price:'556000'},
    {name:'Tvrr',price:'60055'},
  ]

  return (
    <div className="App">
      {/* {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name="laptop"price="16000"></Product>
      <Product name="mobile" price="56000"></Product>
      <Product name="Tv"price="6000"></Product> */}
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}
  function Product(props){
    return (
      <div className="product">
        <h3>Name : {props.name}</h3>
        <p>Price : {props.price}</p>
      </div>
    )
  }

  function Counter(){
    const [count,setCount] = useState(55);
    const IncreaseCount = () =>{
      const newCount = count +1;
      setCount(newCount);
    }

    // console.log(abc)
    return (
      <div>
        <h1>Count :{count} </h1>
        <button onClick={IncreaseCount}>Increase </button>
      </div>
    )
  }
  function ExternalUsers (){
    return (
      <div>
        <h2>External Users : </h2>
      </div>
    )
  }

export default App;
