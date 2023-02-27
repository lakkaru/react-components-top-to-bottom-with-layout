import React from 'react'
import Components from '../../../components/componentSec/Components'

export default function ThemeSec() {
  return (
    <div style={{textAlign:'left'}}>
      <label>Theme</label>
      <Components leftImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5NmlenfpVMs_TwUAXiUNOAj2iwDjJjWvYw&usqp=CAU'} compo={'Colors'} rightImage={''}/>
      <Components leftImage={'data:image/png;base64,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'} compo={'Typography'} rightImage={''}/>
    </div>
  )
}
