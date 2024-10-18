import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  let addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1);

    }
  }
  let removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }

  }
  return (
    <>
      <h1>Counter Using hooks in React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} disabled={counter >= 20}>Add Value</button>
      <br />
      <button onClick={removeValue} disabled={counter <= 0}>Remove Value</button>
    </>
  )
}

export default App
