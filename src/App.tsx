import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componets/navbar/NavBar'
import Home from './paginas/home/Home'
import Footer from './componets/footer/Footer'

function App() {
  return (
    <>
<BrowserRouter>
<NavBar />
<div className='min-h-[80vh]'>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
</Routes>
</div>
<Footer />

</BrowserRouter>

    </>
  )
}

export default App