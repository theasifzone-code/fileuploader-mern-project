import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navabar from './components/layout/Navabar'
import Auth from './pages/Auth';
import Footer from './components/layout/Footer'
import ProtectedRoute from './components/common/ProtectedRoute'
import Verify from './components/layout/Verify'
const App = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <BrowserRouter>
      <Navabar isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      <Routes>
        <Route path="/" element={<Auth isSignUp={isSignUp} setIsSignUp={setIsSignUp} />} />
        <Route path="/verify-otp" element={<Verify/>}/>
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
