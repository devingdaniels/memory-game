import React, {useState, useEffect } from 'react'
// Components
import {CreateDeck, RandomizeCurrentSet ,GetRandomSet, GetInitialSet } from './DeckHelper'
import Card from './Card'

const Board = () => {
    const [deck, setDeck] = useState([])
    const [currentSet, setCurrentSet] = useState([])
    const [count, setCount] = useState(4)
    const [tracker, setTracker] = useState(1)


    function handleClick(status) {
        if (status) {
            console.log('endgame')
        } else { 
            const random = RandomizeCurrentSet(currentSet)
            setCurrentSet(random)
        }
    }

    useEffect(() => {    
        // Create a deck of cards
        const deck = CreateDeck()
        setDeck(deck)
        // Get four random cards from the deck, set initial state with set
        const set = GetInitialSet(deck)
        setCurrentSet(set)
    }, [])


    return (
    <div className='cardGridContainer'>                   
        {currentSet.map((image, index) => { 
            return <Card image={image} index={index} handleClick={handleClick} key={index}></Card>
        })}
    </div>
  )
}

export default Board