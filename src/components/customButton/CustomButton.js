import React, {useContext} from 'react'
import './customButton.css'
import { CanvasContext } from '../../helpers/context/Context'

export const CustomButton = ({image, onclick = ()=>{}, text, customClass, disabled = false, tooltip=''}) => {
  const {IsPageEnabled} = useContext(CanvasContext)
  return (
    <button className={`${customClass || "customButton"} tooltip`} onClick={onclick} disabled={disabled || !IsPageEnabled}>
        {image &&  <img src={require(`../../assets/img/control/${image}.png`)} />}  
        {text}
        {tooltip&&<span className="tooltiptext">{tooltip}</span>}
    </button>
  )
}

