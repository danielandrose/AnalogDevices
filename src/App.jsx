import './App.css'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Monitor from "./components/Monitor"
import { Footer } from './components/Footer'
import TyrePressureDetails from './components/TyrePressureDetails'
import BatteryDetails from './components/TyrePressureDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes className='app'>
          <Route path="/" element={
            <>
            <NavBar />
            <Header />
            <Monitor />
            <Footer className="footer" />
            </>
          }/>
          <Route path="/tyre-pressure-details" element={<TyrePressureDetails/>} />
          <Route path="/battery-details" element={<BatteryDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
