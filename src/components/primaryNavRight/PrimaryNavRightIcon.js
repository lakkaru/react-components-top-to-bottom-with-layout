import React from 'react'

export default function PrimaryNavRightIcon({image, count, countColor}) {
  return (
    <div style={{display:'flex',marginLeft:'10px'}}>
      <img src={image} alt='' height={'20px'}/>
      <p style={{fontSize:'10px', backgroundColor:countColor, borderRadius:50, height: 'fit-content', padding:'0px 4px 0px 4px'}}>{count}</p>
    </div>
  )
}
