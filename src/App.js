import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import About from './pages/about'
import NotFound from './pages/notfound'
function App() {
  return (
    <div>
            <Router>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/portfolio' element={<Portfolio/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
             </Router>
    </div>
  )
}

export default App
