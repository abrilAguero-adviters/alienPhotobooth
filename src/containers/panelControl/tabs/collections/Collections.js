import { React, useEffect, useState } from "react";
import { collectionsDictionary } from "../../../../helpers/netWorking/Constants";
import Search from "./search/Search.js";
import "./collections.css";
import { CollectionService } from "./../../../../services/collections/CollectionService";
import { CustomNotification } from "../../../../components/customNotification/customNotification";

export default function Collections({ newImage }) {

  const [notificaciones, setNotificaciones] = useState([])
  const [SelectedCollection, setSelectedCollection] = useState("Alien Boy");
  const [TokenID, setTokenID] = useState("")
  const [ImageExist, setImageExist] = useState(false)

  const CollectionServiceHandler = async () => {
    try{
       setImageExist(false)
      let r =  await fetch(`https://api${collectionsDictionary[SelectedCollection]}.thealienboy.com/assets/images/transparent/${TokenID}`);
      setImageExist(r.ok)
    }catch{
      setImageExist(false)
    }
     
  }
useEffect(() => {
  
    if(TokenID)
      CollectionServiceHandler()

}, [TokenID, SelectedCollection])

  const addAlienHandler = ()=>{
    
    setNotificaciones(elem =>{
      let nuevo=[...elem, <CustomNotification text={'Alien added!'} key={elem.length}/>]
      return nuevo
    } );
    newImage(`https://api${collectionsDictionary[SelectedCollection]}.thealienboy.com/assets/images/transparent/${TokenID}`, true)
  }
  return (
    <>
      <Search SelectedCollection={SelectedCollection}  TokenID={TokenID} setSelectedCollection={setSelectedCollection} setTokenID={setTokenID}/>
    {(ImageExist && TokenID) ?
    <div className="AlienCard" onClick={addAlienHandler}>
        <img src={`https://api${collectionsDictionary[SelectedCollection]}.thealienboy.com/assets/images/transparent/${TokenID}`}/>
       <div className="AlienName">
        The {SelectedCollection} {TokenID}
        </div>
        <div className="AlienAdd">
          {
            (window.innerWidth < 780)?"Tap":"Click"
          } to Add
        </div>
      </div> :
     <div className="AlienWarning">
          {TokenID ?`
What the fock are you typing?
Please try again with a different number.` : "Search some aliens!"}       
       </div> 
      }  
      
      {
            notificaciones.map((notif)=>{
            return notif
            })
        }
    </>
  );
}
