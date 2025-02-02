import { useState,useEffect } from 'react'

import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Body from './components/Body'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.body.style.zoom = "1.25"; // Zooms in immediately
  }, []);


  return (
    <>  

     <Nav></Nav> 
    <Header></Header>
    <Body></Body>
    <Body2></Body2>
    <Body3></Body3>
    <Footer></Footer>
    </>
  )
}

export default App
