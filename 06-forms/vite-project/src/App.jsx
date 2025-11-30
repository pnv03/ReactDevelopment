const App = () => {

  const change = (e) => {
    e.preventDefault()
    console.log("Submitted")
  }
  return (
    <div>
      <form onSubmit={change}>
        <input type="text" placeholder='Enter Name' />
      </form>
    </div>
  )
}

export default App