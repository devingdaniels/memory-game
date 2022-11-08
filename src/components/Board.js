import React, {useState, useEffect } from 'react'

// Components
import Card from './Card'
import { CreateDeck, RandomizeCurrentSet, addRandomToCurrentSet, GetInitialSet, resetClickedStatus } from './DeckHelper'

const Board = () => {
// State variables 
    const [deck, setDeck] = useState([])
    const [currentSet, setCurrentSet] = useState([])
    const [count, setCount] = useState(1)    
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [level, setLevel] = useState(1)
// Component methods
    function handleClick(clicked) {
        // Check for win condition
        if (isWin()) { 
            alert('the game is over, you win!')
            determineScoring()
        }
        else if (clicked) {
            alert('the game is over, you lose!')                        
            determineScoring()
            playAgain()
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
                // Update the level
                setLevel(level + 1)
            } else {
                const random = RandomizeCurrentSet(currentSet)
                setCurrentSet(random)
                setCount(count + 1)
            }
            // Valid move, update current score
            setCurrentScore(currentScore + 1)            
        }        
    }
    const createGame = () => { 
        // Reset score
        setCurrentScore(0)
    // Create a deck of cards
        const deck = CreateDeck()        
        setDeck(deck)
        // Get four random cards from the deck, set initial state with set        
        const set = GetInitialSet(deck, 4)
        setCurrentSet(set)
        setCount(1)
        setLevel(1)
    }
    const isWin = () => { 
        if (currentSet.length === 20 && count === 20) { 
            return true
        }
        return false
    }

    const determineScoring = () => { 
        setHighScore(() => { 
            if (currentScore > highScore) {
                setHighScore(currentScore)
            }
            else { 
                const temp = highScore
                setHighScore(temp)
            }
        })
        setCurrentScore(0)
    }

    const playAgain = (e) => { 
        createGame()
    }

    useEffect(() => {    
       createGame()
    }, [])
    
    return (
        <>
        <div className='gameHUD'>
                <button onClick={playAgain} className='playAgain'>Play Again</button>
                <div>               
                    <h3>Level: { level} / 5</h3>
                    <h3>Current: {currentScore}</h3>
                    <h3>High: {highScore}</h3>
                </div>
        </div>
        <div className='cardGridContainer'>                   
            {currentSet.map((obj) => { 
                return <Card obj={obj} handleClick={handleClick} key={obj.id}></Card>
            })}
        </div>
    </>
  )
}

export default Board


