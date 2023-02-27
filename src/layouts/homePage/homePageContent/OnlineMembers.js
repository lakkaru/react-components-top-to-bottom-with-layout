import React from 'react'
import OnlineMemberCard from './onlineMembers/OnlineMemberCard'

export default function OnlineMembers() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', color:'white'}}>
      <OnlineMemberCard memCount={9.234} bgColor={'#2719ae'}/>
      <OnlineMemberCard memCount={4.534} bgColor={'#32d8be3'}/>
      <OnlineMemberCard memCount={3.634} bgColor={'#f7a310'}/>
      <OnlineMemberCard memCount={8.574} bgColor={'#dd4142'}/>
    </div>
  )
}
