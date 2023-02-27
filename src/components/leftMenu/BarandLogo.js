import React from 'react'
import lakkaru_logo from '../../images/lakkaru_Logo.png'
export default function BarandLogo() {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', margin:'auto'}}>
      <img src={lakkaru_logo} alt='lakkaru_logo' height={'50px'} />
    <p>Lakkaru</p>
    </div>
  )
}
