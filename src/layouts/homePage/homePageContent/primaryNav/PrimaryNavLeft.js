import React from 'react'
import PrimaryNavLeftLink from '../../../../components/primaryNavLeft/PrimaryNavLeftLink'

export default function PrimaryNavLeft() {
  return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <PrimaryNavLeftLink name={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREeBLdm0zcDusLuzfkVRh766txgP3zRrmQg&usqp=CAU' alt='' height={'15px'}/>}/>
      <PrimaryNavLeftLink link='' name='Dashboard'/>
      <PrimaryNavLeftLink link='' name='Users'/>
      <PrimaryNavLeftLink link='' name='Settings'/>
    </div>
  )
}
