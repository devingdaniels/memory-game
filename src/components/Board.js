import React, {useState, useEffect } from 'react'
// Components
import Card from './Card'
import { CreateDeck, RandomizeCurrentSet, addRandomToCurrentSet, GetInitialSet, resetClickedStatus } from './DeckHelper'

const Board = () => {
    const [deck, setDeck] = useState([])
    const [currentSet, setCurrentSet] = useState([])
    const [count, setCount] = useState(1)
    const [scrollPos, setScrollPos] = useState(0)

    function handleClick(clicked) {
        // Save the scroll posistion 
        setScrollPos(window.scrollY)
        if (clicked) {
            console.log('endgame')
            // Write a function to render end of game 
        } else { 
            // On every for guesses, add for cards to the set
            if (count === currentSet.length) {
                // Don't mutate state directly
                const setCopy = currentSet
                // Temp array of additional four cards
                const addFour = addRandomToCurrentSet(deck, setCopy)
                // Randomize it
                const randomize = RandomizeCurrentSet(addFour)
                // Randomize the new array 
                resetClickedStatus(randomize)                
                // Update the state
                setCurrentSet(randomize)
                // Reset the count
                setCount(1)                
            } else {
                const random = RandomizeCurrentSet(currentSet)
                setCurrentSet(random)
                setCount(count + 1)
            }
        }        
    }

    useEffect(() => {    
        // Create a deck of cards
        const deck = CreateDeck()        
        setDeck(deck)
        // Get four random cards from the deck, set initial state with set        
        const set = GetInitialSet(deck, 4)
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


