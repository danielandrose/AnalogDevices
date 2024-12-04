import './App.css'
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Monitor from "./components/Monitor"
import { Footer } from './components/Footer'
import TyrePressureDetails from './components/TyrePressureDetails'
import BatteryDetails from './components/BatteryDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store'


function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
