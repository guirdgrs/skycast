import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavIconManager from './components/utils/FavIconManager'
import ForecastDetails from './components/forecast/ForecastDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <FavIconManager />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/forecast/:timestamp' element={<ForecastDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
