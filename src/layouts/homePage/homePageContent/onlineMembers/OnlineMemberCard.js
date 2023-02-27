import React from "react";
import OnlineMembersGraph from "../../../../components/onlineMembersCard/OnlineMembersGraph";
import OnlineMembersSettings from "../../../../components/onlineMembersCard/OnlineMembersSettings";
import OnlineMemeberCount from "../../../../components/onlineMembersCard/OnlineMemeberCount";

export default function OnlineMemberCard({memCount, bgColor}) {
  return (
    
    <div style={{marginTop:'10px', backgroundColor:bgColor, borderRadius:'5px', width:'23%'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <OnlineMemeberCount count={memCount} />
        <OnlineMembersSettings />
      </div>
      <OnlineMembersGraph />
    </div>
  );
}
