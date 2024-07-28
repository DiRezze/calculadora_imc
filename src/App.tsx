import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CalculatorApp from './components/calculator'
import DynamicNav from './components/dynamicNav'
import Home from './components/header'
import Footer from './components/footer';
import Information from './components/info';

const App: React.FC = () => {

  return (
    <>
      <DynamicNav />
      <Home />
      <main>
        <CalculatorApp />
        <Information />
      </main>
      <Footer />
    </>
  )
}

export default App
