import React, {useState, useEffect } from 'react'
// Components
import Card from './Card'
import { CreateDeck, RandomizeCurrentSet, GetRandomSet, GetInitialSet } from './DeckHelper'
import uniqid from "uniqid";


const Board = () => {
    const [deck, setDeck] = useState([])
    const [currentSet, setCurrentSet] = useState([])

    function handleClick(clicked) {        
        if (clicked) {
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
        {currentSet.map((obj) => { 
            return <Card obj={obj} handleClick={handleClick} key={obj.id}></Card>
        })}
    </div>
  )
}

export default Board