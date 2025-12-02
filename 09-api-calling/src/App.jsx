import axios from 'axios'

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await response.json()

  //   console.log(data)
  // }


  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default App