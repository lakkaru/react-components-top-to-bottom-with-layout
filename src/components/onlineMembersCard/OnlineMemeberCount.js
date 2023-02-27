import React from 'react'

export default function OnlineMemeberCount({count}) {
  return (
    <div style={{margin:'10px', padding:'10px'}}>
      <p style={{fontSize:'75%', float:'left'}}>{count}</p>
      <p style={{fontSize:'50%'}}>Members Online</p>
    </div>
  )
}
 