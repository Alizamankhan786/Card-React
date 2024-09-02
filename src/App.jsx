import React from 'react'
import Card from './components/card'

function App() {
  return (
    <>
    <h1 >HELLO CARD</h1> <br />
    <Card src="https://images.olx.com.pk/thumbnails/482916762-800x600.webp" price="13,000" title="Mobile Phone" description="VIVO Y85 (4GB-64GB) PTA APPROVED" location="Adiala Road , Rawalpindi" />
    <Card src="https://images.olx.com.pk/thumbnails/482577561-800x600.webp" price="5,700,000" title="Car" description="TOYOTA COROLLA ALTIS 2020" location="Gulberg , Peshawar" />
    </>
  )
}

export default App