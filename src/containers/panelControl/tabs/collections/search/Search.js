import React, {useContext, useEffect} from 'react'
import { CustomButton } from '../../../../../components/customButton/CustomButton'
import { ReactComponent as SearchIcon } from '../../../../../assets/img/control/searchIcon.svg';
import { CanvasContext } from './../../../../../helpers/context/Context';

export default function Search({SelectedCollection, TokenID, setTokenID, setSelectedCollection}) {
    const {IsPageEnabled} = useContext(CanvasContext)

    useEffect(() => {
      if(!IsPageEnabled)
        setTokenID("")
    }, [IsPageEnabled])
    
    const selectCollectionHandler = (collection) => {
        setSelectedCollection(collection);
      };
    
      const tokenIDHandler = (e) => {
        setTokenID(e.target.value.replace(/\D/gm,""))
      }

  return (
    <div className="collectionsHeaderWrapper">
      <CustomButton
        text={"The Alien Boy"}
        onclick={() => {selectCollectionHandler("Alien Boy")}}
        customClass={`customButton CollectionButtons ${SelectedCollection == "Alien Boy" && "SelectedCollection"}`}
      />
      <CustomButton
        text={"The Alien Girl"}
        onclick={() => {selectCollectionHandler("Alien Girl")}}
        customClass={`customButton CollectionButtons ${SelectedCollection == "Alien Girl" && "SelectedCollection"}`}
      />
      <CustomButton
        text={"The Alien UFO"}
        onclick={() => {selectCollectionHandler("Alien UFO")}}
        customClass={`customButton CollectionButtons ${SelectedCollection == "Alien UFO" && "SelectedCollection"}`}
      />
      <CustomButton
        text={"The Alien Doogle"}
        onclick={() => {selectCollectionHandler("Alien Doogle")}}
        customClass={`customButton CollectionButtons ${SelectedCollection == "Alien Doogle" && "SelectedCollection"}`}
      />

    <div className="searchWrapper">
      {/* <img src={require(`../../../../../assets/img/control/searchIcon.svg`).default} /> */}
      <SearchIcon className='searchIcon'/>
      <input placeholder="Search by ID" value={TokenID} onChange={tokenIDHandler} disabled={!IsPageEnabled} type="number"/>
      <div onClick={()=>{setTokenID("")}}>x</div>
    </div>


  </div>
  )
}
