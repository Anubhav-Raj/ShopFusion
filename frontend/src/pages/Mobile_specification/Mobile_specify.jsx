import React from 'react'
import Maindetails from '../../components/mobile_specification/Maindetails'
import Smilar_products from '../../components/mobile_specification/Smilar_products'
import Specification from '../../components/mobile_specification/Specification'
import "./Mobile_specify.css"
function Mobile_specify() {
  return (
    <>
     <main className="pg-twa">
        <Maindetails/>
        <Smilar_products/>
        <Specification/>
        
        
      </main>
    </>
  )
}

export default Mobile_specify