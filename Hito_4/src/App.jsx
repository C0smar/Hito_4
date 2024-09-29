import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPages from './components/RegisterPages';
import LoginPages from './components/LoginPages'
import Cart from './components/Cart'
import Pizza from './components/Pizza'


function App() {
  return (
    <>
      <NavComponent/>
      <Home/>
      {/* <RegisterPages/> */}
      {/* <LoginPages/> */}
      {/* <Cart/> */}
      {/* <Pizza/> */}
      <Footer/>
    </>
    
  )
  
}

export default App
