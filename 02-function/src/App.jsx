const App = () => {
  const inputChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div>
      <input onChange={inputChange} placeholder='Enter' />
    </div>
  )
}

export default App