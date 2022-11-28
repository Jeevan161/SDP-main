import React from 'react'
import kllogo from '../assets/kllogo.jpg';

function Header() {
  return (
   <div style={{display:"flex",marginTop:'1%',justifyContent:'normal',height:"2%",alignItems:'center'}}>
    <img src={kllogo} alt="logo" style={{width:"10%",height:"10%",marginLeft:"2%",display:"flex"}} />
    <h1 style={{fontSize:"280%",marginLeft:"25%"}}>STUDENT-PORTAL</h1>
    </div>

  )
}

export default Header