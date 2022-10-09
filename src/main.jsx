import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
