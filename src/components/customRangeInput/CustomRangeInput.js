import React, {useContext} from 'react'
import './customRangeInput.css'
import { CanvasContext } from '../../helpers/context/Context'

export default function CustomRangeInput({text = "Example", onChange, min = 0, max = 10, step = 1, value, showInputBox=true}) {
  const {IsPageEnabled} = useContext(CanvasContext)

  return (
  <div className='RangeInputWrapper'>
    <span>{text + ':'}</span>
    <input type={"range"} onChange={onChange}  min={min} max={max} step={step} value={value} disabled={!IsPageEnabled}/>
        <input type={"number"} onChange={onChange}  min={min} max={max} step={step} value={value} disabled={!IsPageEnabled} style={!showInputBox ? { opacity : '0' } : {}}/>
  </div> 
  )
}
