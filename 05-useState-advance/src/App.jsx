import { useState } from 'react'

const App = () => {

  const [name, setName] = useState({ user: 'pnv' })

  function change() {
    setName({ user: 'pranav' })
  }

  function revert() {
    setName({ user: 'pnv' })
  }

  return (
    <div>
      <h1>{name.user}</h1>
      <button onClick={change}>click</button>
      <button onClick={revert}>revert</button>
    </div>
  )
}

export default App