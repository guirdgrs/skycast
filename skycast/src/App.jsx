import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavIconManager from './components/utils/FavIconManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <FavIconManager />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
