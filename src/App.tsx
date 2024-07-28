import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CalculatorApp from './components/calculator'
import DynamicNav from './components/dynamicNav'
import Home from './components/home'

const App: React.FC = () => {

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
