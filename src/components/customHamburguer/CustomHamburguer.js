import React, { useState, useContext } from 'react';
import './customHamburguer.css';
import { CanvasContext } from '../../helpers/context/Context';

export const CustomHamburguer = ({onclick, showSettings}) => {
    const {IsPageEnabled} = useContext(CanvasContext);
  
  return (
      <div id='hamburguerContainer' onClick={onclick} className={!IsPageEnabled ? "disabledHamburguer" : ""}>
        <div id="hamburguer"  className={showSettings === "show" ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>   
        </div>

      </div>
  )
}
