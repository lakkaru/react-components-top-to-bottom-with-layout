import React from 'react'

export default function SocialIcon({color, icon}) {
  return (
    <div style={{backgroundColor:color, padding:'10px'}}>
      <img src={icon} height={'50px'} alt=''/>
    </div>
  )
}
