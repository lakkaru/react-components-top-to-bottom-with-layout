import React from 'react'
import PrimaryNavLeftLink from './primaryNavLeft/PrimaryNavLeftLink'

export default function PrimaryNavLeft() {
  return (
    <div  style={{display:'flex', justifyContent:'space-between'}}>
      <PrimaryNavLeftLink/>
      <PrimaryNavLeftLink/>
      <PrimaryNavLeftLink/>
      <PrimaryNavLeftLink/>
    </div>
  )
}
