import React, { useState, useContext } from 'react'
import { fabric } from 'fabric';
import './PanelControl.css'
import Images from './tabs/images/Images';
import Collections from './tabs/collections/Collections';
import Backgrounds from './tabs/backgrounds/Backgrounds';
import { TabsHeader } from './tabsHeader/TabsHeader';
import { CanvasContext } from '../../helpers/context/Context';

export default function PanelControl (){ // Tabs + tools

  const {canvas, IsPageEnabled} = useContext(CanvasContext)  

  const [actualTab, setActualTab] = useState('Collections');

  const newImageOnCanvas = (IMGpath, isFromAlienCollection = false) => {
    if(!IsPageEnabled){
      return;
    }

     new fabric.Image.fromURL(IMGpath, function(aImg) {
       let scaleValue = isFromAlienCollection ? 0.1 : 0.5
        aImg.scale(scaleValue);
        canvas.add(aImg);
        canvas.renderAll();
      }, {crossOrigin: "Anonymous"}
      );

    }

  const tabs={
    "Collections":<Collections  newImage={newImageOnCanvas}/>,
    "Backgrounds":<Backgrounds />,
    "Stickers":<Images newImage={newImageOnCanvas}/>,
  };
    
  return (
    <>
    <div className='tabsWrapper'>
       <TabsHeader tabs={tabs} actualTab={actualTab} changeTab={setActualTab} />
      {
        tabs[actualTab]
      }
    </div>
    </>
    )
}
