import React  from 'react'

const Card = ( props ) => {
    const updateStatus = () => {  
        // If false, first time card has been clicked; set to true and return false
        // If true, card has been clicked, return true 
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