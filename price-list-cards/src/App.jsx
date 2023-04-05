import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceLists/PriceList'
import DeashBoard from './components/DeashBoard/DeashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
    <PriceList></PriceList>
    <DeashBoard></DeashBoard>
    </div>
  )
}

export default App
