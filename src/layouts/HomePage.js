import React from 'react'
import HomePageContent from './homePage/HomePageContent'
import LeftMenu from './homePage/LeftMenu'

export default function HomePage() {
  return (
    <div style={{display:'flex'}}>
      <LeftMenu/>
      <HomePageContent/>
    </div>
  )
}
