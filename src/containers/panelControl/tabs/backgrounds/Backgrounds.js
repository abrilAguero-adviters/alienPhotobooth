import React, {useContext, useState, useEffect} from 'react'
import { fabric } from 'fabric';
import { CustomButton } from '../../../../components/customButton/CustomButton';
import { CustomFileInput } from '../../../../components/customFileInput/CustomFileInput';
import { CanvasContext } from '../../../../helpers/context/Context';
import { CustomNotification } from '../../../../components/customNotification/customNotification';

export default function Backgrounds() {
    const [notificaciones, setNotificaciones] = useState([])

    const {canvas} = useContext(CanvasContext)  
    const [backgroundPaths, setbackgroundPaths] = useState([])

    useEffect(() => {
            getImages()
    }, [])

    const getImages = async () => {
       let response = await fetch ("https://app.thealienboy.com/photobooth/api/getBackgrounds.php");
       response = await response.json()
       setbackgroundPaths(response)
    }

    const getImageScaleXY= (newBg)=>{
        let s,t,l;
        let cW=canvas.width;
        let cH=canvas.height;
        let cAR = canvas.width / canvas.height;
        let iAR = newBg.width / newBg.height;
        if (cAR >= iAR) {
            s = cW / newBg.width;
            l = 0;
            t = -((newBg.height * s) - cH) / 2;
        } else {
            s = cH / newBg.height;
            t = 0;
            l = -((newBg.width * s) - cW) / 2;

        }
        return [s,t,l];

    }

    const setCanvasBackgroundHandler = (imageUrl) => {
        setNotificaciones(elem =>{
            let nuevo=[...elem, <CustomNotification text={'Background added!'} key={elem.length}/>]
            return nuevo
          } );

        fabric.Image.fromURL(imageUrl, function (img) { 
            let [scale,top,left]=getImageScaleXY(img); 

            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                top: top,
                left: left,
                originX: 'left',
                originY: 'top',
                scaleX: scale,
                scaleY: scale
            });
        }, {crossOrigin: "Anonymous"});

    }

    const clearBackgroundHandler = () => {
        const image = new fabric.Image('', {crossOrigin: "Anonymous"});
        canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas));
    }

    const uploadBackgroundHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const selectedImage = e.target.files[0];
          
          const imageUrl=URL.createObjectURL(selectedImage);
          setCanvasBackgroundHandler(imageUrl);
        }
        
    }

    return (
      <div>
        <CustomButton onclick={clearBackgroundHandler} text="Clear Background"/>
        <div className='backgroundContainer'>
        <CustomFileInput onChange={uploadBackgroundHandler} text="Upload Your Background"/>
            { 
              backgroundPaths.map( (item, index) => {
                  let path = "https://app.thealienboy.com/photobooth" + item
  
              return(
                  <div onClick={()=>{setCanvasBackgroundHandler(path)}} key={index} className='imageButton'>
                      <img src={path}></img>
                  </div>
                  )  
              })
            
            }
        </div>
        
        {
            notificaciones.map((notif)=>{
            return notif
            })
        }
      </div>
    )
}
