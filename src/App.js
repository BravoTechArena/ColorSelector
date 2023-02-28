import React, {useState} from 'react'
import Square from './Square'
import Input from './Input'
import './App.css'

function App() {

  const [colorValue, setColorValue] = useState('')
  const [textColor, setTextColor] = useState(true)

  return (
    <div className="App">
        <Square 
        colorValue={colorValue}
        textColor={textColor}
        />
        <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        textColor={textColor}
        setTextColor={setTextColor}
        />
    </div>
  )
}

export default App
