import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navabar from './components/layout/Navabar'
import Auth from './pages/Auth';
import Footer from './components/layout/Footer'
const App = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <BrowserRouter>
      <Navabar isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      <Routes>
        <Route path="/" element={<Auth isSignUp={isSignUp} setIsSignUp={setIsSignUp} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
