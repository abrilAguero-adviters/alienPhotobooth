import React from 'react'
import './customNotification.css'
export const CustomNotification = ({text = ''}) => {
  
  return (
    <div className='notification'>
      {text}
    </div>
  )
}
