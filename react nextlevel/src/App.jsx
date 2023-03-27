import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './component/Device/Device'
import DevceDetails from './component/DeviceDetails/DevceDetails'
import Watch from './component/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Device name="uphone" price="13000"></Device>
      <Device name="samsung" price="20000"></Device>
      <Watch></Watch>
      
    
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    
    </div>
  )
}

export default App
