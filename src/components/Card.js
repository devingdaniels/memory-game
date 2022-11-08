import  {React, useEffect, useState} from 'react'

const Card = ( props ) => {
    const updateStatus = (e) => {           
        if (!props.obj.clicked) {
            props.obj.clicked = true
            props.handleClick(false)
        } else { 
            props.handleClick(true)
        }        
    }
    return (
        <div className='gridItem' >            
            <img className='card' src={props.obj.image} id={props.id} onClick={updateStatus} alt=''></img>
        </div>
  )
}

export default Card