import React from 'react'
import './customHyperLink.css'

export default function CustomHyperLink( {image, href = "#", text, customClass, disabled = false, children}) {
  return (
    <a className={`${customClass || "CustomHyperLink"}`} href={href} disabled={disabled} target="_blank">
        {image ?  <img src={require(`../../assets/img/control/${image}.png`)} /> :
        children}  
        {text}
    </a>
  )
}
