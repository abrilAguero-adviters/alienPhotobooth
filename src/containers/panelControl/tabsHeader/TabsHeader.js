import React, { useContext } from 'react'
import { CanvasContext } from '../../../helpers/context/Context';
import './tabsHeader.css';
export const TabsHeader = ({tabs, actualTab, changeTab}) => {

    const {IsPageEnabled} = useContext(CanvasContext);
    const changeTabHandler = (e)=>{
        if (IsPageEnabled) {
            changeTab(e.target.innerText);
        }
    }

  return (
    <div className='tabHeader'>
        {
            Object.keys(tabs).map(function(key) {
                return <div onClick={changeTabHandler} key={key} className={`tabHeaderItem ${key == actualTab && "tabHeaderItemActive"}`} disabled={!IsPageEnabled}>{key}</div>
            })
        }
    </div>
  )
}
