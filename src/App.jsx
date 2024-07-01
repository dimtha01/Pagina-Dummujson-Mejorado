import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './page/Inicio'
import Paginas from './page/Paginas'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Paginas/:tipo' element={<Paginas />} />
          <Route path='/Paginas/:tipo/:id' element={<Paginas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App