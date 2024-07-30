import React from 'react'
import './customTextboxInput.css'

export default function CustomTextboxInput({text = "Example", onChange, min = 0, max = 10, value, type="text"}) {

  return (
  <div className='TextboxInputWrapper'>
    <span>{text + ':'}</span>
    <input type={type} onChange={onChange} min={min} max={max} value={value}/>
  </div> 
  )
}
