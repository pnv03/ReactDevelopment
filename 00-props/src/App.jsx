import Card from "./components/Card"

const App = () => {
  return (
    <div className="app">
      <Card user='Pranav' age={20} img='https://images.unsplash.com/photo-1763634708735-003d172bf637?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Pratik' age={27} img='https://images.unsplash.com/photo-1455732063391-5f50f4df1854?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App