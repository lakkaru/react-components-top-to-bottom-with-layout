import React from 'react'
import BarandLogo from '../../components/leftMenu/BarandLogo'
import ComponentSec from './leftMenu/ComponentSec'
import DashBoard from './leftMenu/DashBoard'
import ExtrasSec from './leftMenu/ExtrasSec'
import ThemeSec from './leftMenu/ThemeSec'

export default function LeftMenu() {
  return (
    <div style={{backgroundColor:'#3b4b64',color:'white',fontSize:'50%', padding:'10px', borderRadius:'10px 0px 0px 10px'}}>
      <BarandLogo/>
      <DashBoard/>
      <ThemeSec/>
      <ComponentSec/>
      <ExtrasSec/>
    </div>
  )
}
