import React from 'react'
import './Input.css'

function Input({colorValue, setColorValue, textColor, setTextColor}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>
            Add Color Name
        </label>
        <input 
            type='text'
            autoFocus
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />

        <button
            type='button'
            onClick={() => setTextColor(!textColor)}
        >
          Toggle Text Color
        </button>
    </form>
  )
}

export default Input
