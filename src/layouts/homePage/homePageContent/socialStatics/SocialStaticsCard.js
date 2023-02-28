import React from "react";
import SocialIcon from "../../../../components/socialStaticsCard/SocialIcon";
import SocialStat from "../../../../components/socialStaticsCard/SocialStat";

export default function SocialStaticsCard({color, icon, count1, count2, cat1, cat2}) {
  return (
    <div style={{backgroundColor:'white', minWidth:'32%'}}>
      <SocialIcon color={color} icon={icon}/>
      <div style={{display:'flex', justifyContent:"space-around", margin:'8px'}}>
        <SocialStat count={count1} category={cat1}/>
        <div style={{border:'1px solid gray'}}></div>
        <SocialStat count={count2} category={cat2}/>
      </div>
    </div>
  );
}
