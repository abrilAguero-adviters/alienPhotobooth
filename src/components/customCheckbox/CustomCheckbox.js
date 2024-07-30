import React from 'react'
import './customCheckbox.css'

export default function CustomCheckbox({text = "Example", onChange}) {

  return (
  <div className='CheckboxWrapper'>
    <span>{text + ':'}</span>

    <label className="switch">
        <input type="checkbox" onChange={onChange}/>
        <span className="slider" />
    </label>

  </div> 
  )
}
