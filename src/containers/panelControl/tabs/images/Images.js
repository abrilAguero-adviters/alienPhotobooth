import React, {useEffect, useState} from 'react'
import { CustomFileInput } from '../../../../components/customFileInput/CustomFileInput';
import { CustomNotification } from '../../../../components/customNotification/customNotification';

export default function Images({newImage}) {
  const [notificaciones, setNotificaciones] = useState([])

  const [stickersPaths, setstickersPaths] = useState([])

    useEffect(() => {
      getImages()
    }, [])

    const getImages = async () => {
       let response = await fetch ("https://app.thealienboy.com/photobooth/api/getStickers.php");
       response = await response.json()
       setstickersPaths(response)
    }

    
  const uploadStickerHandler = (url)=>{
    setNotificaciones(elem =>{
      let nuevo=[...elem, <CustomNotification text={'Sticker added!'} key={elem.length}/>]
      return nuevo
    } );
    newImage(url)
  }
  const uploadBackgroundHandler = (e)=>{
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];

      const imageUrl=URL.createObjectURL(selectedImage);
      
      setNotificaciones(elem =>{
        let nuevo=[...elem, <CustomNotification text={'Sticker added!'} key={elem.length}/>]
        return nuevo
      } );
      newImage(imageUrl)
    }

  }
  return (
    <div>
      <div className='ImagesContainer'>
      <CustomFileInput onChange={uploadBackgroundHandler} text="Upload Your Sticker"/>
          { 
            stickersPaths.map( (item, index) => {
              let path = "https://app.thealienboy.com/photobooth" + item

            return(
                <div onClick={()=>{uploadStickerHandler(path)}} key={index} className='imageButton'>
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
