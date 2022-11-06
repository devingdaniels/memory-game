import  {React, useEffect, useState} from 'react'

const Card = ( props ) => {
    const updateStatus = () => {   
        console.log(props.obj.clicked)
        if (!props.obj.clicked) {
            props.obj.clicked = true
            props.handleClick(false)
        } else { 
            props.handleClick(true)
        }        
    }

    return (
        <div>            
            <img className='card' src={props.obj.image} id={props.id} onClick={updateStatus} alt=''></img>
            </div>
  )
}

export default Card