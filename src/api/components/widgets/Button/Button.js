import React from 'react'
import './Button.scss'


const Button = ({text, btnClass, btnID, image}) => {
   return (
      <button
	   className = {btnClass}
	   id = {btnID}
      >   
       <i><img src={image} /></i>
       <span>{text}</span>
       
      </button>
   )
   
}

export default Button
