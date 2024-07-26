import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorApp from './components/calculator'
import DynamicNav from './components/dynamicNav'
import Home from './components/home'

function App() {
  return (
    <>
      <DynamicNav />
      <Home />
      <main>
        <CalculatorApp />
      </main>
    </>
  )
}

export default App
