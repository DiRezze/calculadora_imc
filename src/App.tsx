import './App.css'
import CalculatorApp from './components/calculator'
import DynamicNav from './components/dynamicNav'

function App() {
  return (
    <>
      <DynamicNav />
      <main>
        <CalculatorApp />
      </main>
    </>
  )
}

export default App
