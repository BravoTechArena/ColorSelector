import React from 'react'
import './Square.css'

function Square({colorValue, textColor}) {
  return (
    <section className='square' style={{
      backgroundColor: colorValue, 
      color: textColor ? '#000' : '#FFF'
      }}>
        <p>
            {colorValue ? colorValue : 'Empty Value'}
        </p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: 'Empty Color Value'
}

export default Square
