import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    let [counter , setCounter] = useState(10)

    const addValue = () => {
      setCounter (counter => counter + 1)
      setCounter (counter => counter + 1)
      setCounter (counter => counter + 1)
      setCounter (counter => counter + 1)
      setCounter (counter => counter + 1)
    }
    const removeValue = () => {
      setCounter (counter - 1)
    }
  return (
    <>
    <h1>Counter value: {counter}</h1>

    <button onClick={addValue} className='mx-2 mt-3 btn-add '>Add value</button>
    <button onClick={removeValue} className='btn-remove'>Remove value</button>
    </>
      
  )
}

export default Counter
