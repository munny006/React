import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name:'latopfff',price:'156000'},
    {name:'mobilerr',price:'556000'},
    {name:'Tvrr',price:'60055'},
  ]

  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop"price="16000"></Product>
      <Product name="mobile" price="56000"></Product>
      <Product name="Tv"price="6000"></Product> */}
      
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

export default App;
