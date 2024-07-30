import React, { useState, useContext, useEffect } from 'react'
import { fabric } from 'fabric';
import 'fabric-history';
import { CustomButton } from '../../../components/customButton/CustomButton';
import { CustomHamburguer } from '../../../components/customHamburguer/CustomHamburguer';
import './tools.css'
import { CanvasContext } from '../../../helpers/context/Context';
import { Controls } from './../controls/Controls';
import { ReactComponent as Download } from '../../../assets/img/control/download.svg';
import { ReactComponent as Clear } from '../../../assets/img/control/clear.svg';
import { CustomNotification } from '../../../components/customNotification/customNotification';

export const Tools = () => { //Tools de arriba a la izquierda
  const [notificaciones, setNotificaciones] = useState([])
  const {canvas} = useContext(CanvasContext)  
  const [IsMobile, setIsMobile] = useState(window.innerWidth > 850)
  const {IsPageEnabled} = useContext(CanvasContext);
  
  useEffect(() => {
    window.addEventListener("resize", function(event) {
      setIsMobile(window.innerWidth > 850)
    });
  }, [])

  const [showSettings, setShowSettings] = useState('hide');
  const UndoHandler=()=>{
    canvas.undo();
  }
  const RedoHandler=()=>{
    canvas.redo();
  }
  const FlipHorizontallyHandler = () =>{
    let obj = canvas.getActiveObject();
    if (obj) {
        obj.set('flipX', !obj.flipX);
        canvas.renderAll();
    }
  }

  const FlipVerticallyHandler = ()=>{
      let obj = canvas.getActiveObject();
      if (obj) {
          obj.set('flipY', !obj.flipY);
          canvas.renderAll();
      }
  }
  
  const SelectHandler = () => {
    DeselectHandler()
    let objects = canvas.getObjects().filter(e => e.name !== 'grid');
    var selection = new fabric.ActiveSelection(objects, {
      canvas: canvas
    });
    canvas.setActiveObject(selection).renderAll(); 
  }

  const DeselectHandler = () => {
    canvas.discardActiveObject();
    canvas.renderAll();
  }

  const SendToBackHandler = () => {
    var activeObj = canvas.getActiveObject();
    canvas.sendToBack(activeObj).renderAll();
    let grid=canvas.getObjects().find(e => e.name === 'grid');
    canvas.sendToBack(grid).renderAll();
    
  }
  const BringToFrontHandler = () => {
    var activeObj = canvas.getActiveObject();
    canvas.bringToFront(activeObj).renderAll();
  }

  const SendBackwardsHandler = () => {
    var activeObj = canvas.getActiveObject();
    canvas.sendBackwards(activeObj).renderAll();
    let grid=canvas.getObjects().find(e => e.name === 'grid');
    canvas.sendToBack(grid).renderAll();
  } 
  const BringForwardsHandler = () => {
    var activeObj = canvas.getActiveObject();
    canvas.bringForward(activeObj).renderAll();
  } 

  const GroupItemsHandler = () => {

    if (!canvas.getActiveObject() || canvas.getActiveObject().type !== 'activeSelection') {
      return;
    }

    try {
      canvas.getActiveObject().toGroup();
      canvas.requestRenderAll();
    } catch (error) {
      console.log(error);
    }
  } 

  const UngroupItemsHandler = () => {
    if (!canvas.getActiveObject() || canvas.getActiveObject().type !== 'group') {
      return;
    }

    canvas.getActiveObject().toActiveSelection();
    canvas.requestRenderAll();
  } 

  const ClearCanvasHandler = ()=>{
    setNotificaciones(elem =>{
      let nuevo=[...elem, <CustomNotification text={'Canvas cleared!'} key={elem.length}/>]
      return nuevo
    } );
    canvas.clear();
    canvas.backgroundColor="white";
    canvas.renderTop();
  }

  const dowloadCanvasHandler = () =>{
    const checkbox= document.getElementById('gridCheckbox');
    if (checkbox.checked) {
      checkbox.click();
    }
    
    setNotificaciones(elem =>{
      let nuevo=[...elem, <CustomNotification text={'Downloading...'} key={elem.length}/>]
      return nuevo
    } );
    canvas.discardActiveObject();
    canvas.renderAll();
    
    var banner = document.getElementById("canvas");
    
    let image = banner.toDataURL("image/png", 1.0)
    // .replace("image/png", "image/octet-stream");
    var link = document.createElement('a');

    link.download = "My_Alien_Banner.png";
    link.href = image;
    link.click();

  }

  const hamburguerHandler = ()=>{
    if (!IsPageEnabled) {
      return;
    }
    if (showSettings==='show') {
      setShowSettings('hide');
    } else {
      setShowSettings('show');
    }
  }
  return (
    <div className='toolsWrapper'>
       <div className='editWrapper'>
        <CustomHamburguer onclick={hamburguerHandler} showSettings={showSettings}/>
        <CustomButton onclick={SelectHandler} image="select" customClass='toolBtn' tooltip='Select all' />
        <CustomButton onclick={DeselectHandler} image="deselect" customClass='toolBtn' tooltip='Deselect all' />
        <CustomButton onclick={UndoHandler} image="undo" customClass='toolBtn'  tooltip='Undo' />
        <CustomButton onclick={RedoHandler} image="redo" customClass='toolBtn' tooltip='Redo' />
        <CustomButton onclick={FlipHorizontallyHandler} image="flipHorizontal" customClass='toolBtn' tooltip='Flip Horizontally' />
        <CustomButton onclick={FlipVerticallyHandler} image="flipVertical" customClass='toolBtn' tooltip='Flip Vertically' />
        <CustomButton onclick={SendToBackHandler} image="sendToBack" customClass='toolBtn' tooltip='Send to back' />
        <CustomButton onclick={BringToFrontHandler} image="bringToFront" customClass='toolBtn' tooltip='Bring to front' />
        <CustomButton onclick={SendBackwardsHandler} image="sendBackwards" customClass='toolBtn' tooltip='Send backwards' />
        <CustomButton onclick={BringForwardsHandler} image="bringForwards" customClass='toolBtn' tooltip='Bring forwards' />
        <CustomButton onclick={GroupItemsHandler} image="groupItems" customClass='toolBtn' tooltip='Group items' />
        <CustomButton onclick={UngroupItemsHandler} image="ungroupItems" customClass='toolBtn' tooltip='Ungroup items' />
        <button className={` canvasActionBtn`} onClick={ClearCanvasHandler} disabled={!IsPageEnabled}>
          <Clear className='specialButton'/>  {IsMobile && <span>Clear</span>}
        </button>
        <button className=' canvasActionBtn' onClick={dowloadCanvasHandler} disabled={!IsPageEnabled}>
          <Download className='specialButton'/> {IsMobile && <span>Download</span>}
        </button>
      </div>
      <div className={`settingsWrapper ${showSettings}`}>
          <Controls  hamburguerHandler={hamburguerHandler}/>
      </div>
      {
        notificaciones.map((notif)=>{
          return notif
        })
      }
    </div>
     
  )
}
