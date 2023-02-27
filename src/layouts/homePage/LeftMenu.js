import React from 'react'
import BarandLogo from './leftMenu/BarandLogo'
import ComponentSec from './leftMenu/ComponentSec'
import DashBoard from './leftMenu/DashBoard'
import ExtrasSec from './leftMenu/ExtrasSec'
import ThemeSec from './leftMenu/ThemeSec'

export default function LeftMenu() {
  return (
    <div>
      <BarandLogo/>
      <DashBoard/>
      <ThemeSec/>
      <ComponentSec/>
      <ExtrasSec/>
    </div>
  )
}
