import React from 'react'
import SocialStaticsCard from './socialStatics/SocialStaticsCard'

export default function SocialStatics() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <SocialStaticsCard/>
      <SocialStaticsCard/>
      <SocialStaticsCard/>
    </div>
  )
}
