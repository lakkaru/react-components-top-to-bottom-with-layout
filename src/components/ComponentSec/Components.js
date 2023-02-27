import React from 'react'

export default function Components({leftImage, compo, rightImage}) {
  return (
    <div style={{display:'flex',  alignItems:'center'}}>
      <img src={leftImage} height={'15px'}/>
      <p  style={{padding:'10px'}}>{compo}</p>
      <div>
      <img src={rightImage} height={'10px'}  style={{float:'right'}}/>
      </div>
      
    </div>
  )
}
