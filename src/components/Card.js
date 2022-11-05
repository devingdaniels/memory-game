import React from 'react'

import RandomImagesArray from './CardsArray'

import { useState, useEffect } from 'react'

const Card = () => {
    const [images, setImages] = useState([])
    const [count, setCount] = useState(4)
    const [tracker, setTracker] = useState(1)


    function handleClickEvent(e) { 
        setTracker(tracker + 1)
        if (tracker % 4 === 0) { 
            setCount(count + 4)
        }        
    }

    useEffect(() => {                 
        const newRandom = RandomImagesArray(count)        
        setImages(newRandom)
    }, [count])

    return (
    <div className='cardGridContainer'>                   
        {images.map((image, index) => { 
        return <img className='card' id={ index} src={image} key={index} onClick={ handleClickEvent} alt=''></img>
        })}
    </div>
  )
}

export default Card