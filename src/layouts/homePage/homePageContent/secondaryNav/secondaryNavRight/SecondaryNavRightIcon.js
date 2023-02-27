import React from 'react'

export default function SecondaryNavRightIcon({icon , name}) {
  return (
    <div style={{display:'flex', alignItems:'center', marginRight:'10px'}}>
      <img src={icon} height={'20px'} alt='' style={{marginRight:'5px'}}/>
      <p>{name}</p>
    </div>
  )
}
