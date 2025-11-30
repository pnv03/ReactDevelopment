import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 2);
  }

  function decreaseNum() {
    setNum(num - 2);
  }

  return (
    <div>
      <div>{num}</div>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
    </div>
  )
}

export default App