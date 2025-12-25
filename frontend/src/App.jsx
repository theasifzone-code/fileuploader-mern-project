import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navabar from './components/layout/Navabar'
import Auth from './pages/Auth';
import Footer from './components/layout/Footer'
import PublicRoute from './components/common/PublicRoute'
import PrivateRoute from './components/common/PrivateRoute'
import Verify from './components/layout/Verify'
const App = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <BrowserRouter>
      <Navabar isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <Auth isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
          </PublicRoute>
        } />
        <Route path="/verify-otp" element={<Verify />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        } />
        <Route path="/contact" element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
