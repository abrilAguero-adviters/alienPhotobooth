import React, {useContext} from 'react'
import './customFileInput.css'
import { CanvasContext } from '../../helpers/context/Context'

export const CustomFileInput = ({onChange, id, text='Seleccionar Archivo'}) => {
  const {IsPageEnabled} = useContext(CanvasContext)

  return (
    <label className={`customFileInputLabel ${!IsPageEnabled && "disabled"}`}>
      <input className='customFileInput' type="file" accept="image/*" id="imageLoader" onChange={onChange}/>
      <div className="customFileInputSigno">+</div>
      <div className="customFileInputTexto">{text}</div>
    </label>
  )
}