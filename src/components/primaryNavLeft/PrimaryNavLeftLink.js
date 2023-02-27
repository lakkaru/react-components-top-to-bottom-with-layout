import React from 'react'

export default function PrimaryNavLeftLink({link, name}) {
  return (
    <div style={{margin:'10px 10px 10px 0px'}}>
      <p> {name}<a href={link}></a></p>
    </div>
  )
}
