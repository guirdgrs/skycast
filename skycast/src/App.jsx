import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavIconManager from './components/utils/FavIconManager'
import ForecastDetails from './components/forecast/ForecastDetails';
import ErrorTestPage from './components/pages/ErrorTestPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <FavIconManager />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/forecast/:timestamp' element={<ForecastDetails/>}/>
        <Route path='/error' element={<ErrorTestPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
