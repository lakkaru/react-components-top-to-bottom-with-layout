import React from 'react'
import SecondaryNavLeft from './secondaryNav/SecondaryNavLeft'
import SecondaryNavRight from './secondaryNav/SecondaryNavRight'

export default function SecondaryNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <SecondaryNavLeft/>
      <SecondaryNavRight/>
    </div>
  )
}
