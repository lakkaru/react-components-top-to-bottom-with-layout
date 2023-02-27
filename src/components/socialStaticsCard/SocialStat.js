import React from 'react'

export default function SocialStat({count, category}) {
  return (
    <div>
      <p>{count}</p>
      <p style={{fontSize:'8px'}}>{category}</p>
    </div>
  )
}
