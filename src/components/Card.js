import React from 'react'

import { useState } from 'react'

const Card = ({ index, image, handleClick }) => {
    const [status, setStatus] = useState(false)

    const updateStatus = () => { 
        if (status) {
            handleClick(status)
        }
        else {             
            handleClick(status)
            setStatus(true)         
        }
    }

    return (      
        <img className='card' id={index} src={image} onClick={updateStatus} alt=''></img>
  )
}

export default Card