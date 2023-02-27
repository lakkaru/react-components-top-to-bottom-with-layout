import React from 'react'
import PrimaryNavLeft from './primaryNav/PrimaryNavLeft'
import PrimaryNavRight from './primaryNav/PrimaryNavRight'

export default function PrimaryNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <PrimaryNavLeft/>
      <PrimaryNavRight/>
    </div>
  )
}
