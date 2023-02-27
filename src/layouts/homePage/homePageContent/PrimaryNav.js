import React from 'react'
import PrimaryNavLeft from './primaryNav/PrimaryNavLeft'
import PrimaryNavRight from './primaryNav/PrimaryNavRight'

export default function PrimaryNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', height:'50px', padding:'0px 20px 0px 20px'}}>
      <PrimaryNavLeft/>
      <PrimaryNavRight/>
    </div>
  )
}
