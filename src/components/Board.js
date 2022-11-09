import React, { useState, useEffect, useRef } from 'react'
// Components
import Card from './Card'
import { CreateDeck, RandomizeCurrentSet, addRandomToCurrentSet, GetInitialSet, resetClickedStatus } from './DeckHelper'
import { threeLives, twoLives, oneLife, noLives} from './Lives'

const Board = () => {
// State variables 
    const [deck, setDeck] = useState([])
    const [currentSet, setCurrentSet] = useState([])
    const [rounds, setRounds] = useState(1)    
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [level, setLevel] = useState(1)
    const [heartsArr, setHeartsArr] = useState([])
    const livesCount = useRef(3)
// Component methods
    function handleClick(clicked) {
        // Check for win condition
        if (isWin()) { 
            alert('the game is over, you win!')
            determineScoring()
        }
        else if (clicked) {            
            // Tell user they lost a life            
            alert('You lost a life!')
            // Update lives state
            updateLives()            
            if (livesCount.current === 0) { 
                updateLives()
                alert("You ran out of lives. Game Over :( ")                
                // Update the score
                determineScoring()
                const gameBoard = document.getElementById('cardGridContainer')          
                gameBoard.style.pointerEvents = 'none';
            }
        } else { 
            // Every time level increases, add four cards, randomize, and update state
            if (rounds === currentSet.length) {
                // Don't mutate state directly
                const setCopy = currentSet
                // addFour contains previous set plus 4 new random cards
                const addFour = addRandomToCurrentSet(deck, setCopy)
                // Randomize the new set
                const randomizedSet = RandomizeCurrentSet(addFour)
                // Reset each card clicked property to false
                resetClickedStatus(randomizedSet) 
                // Update the currentSet with the randomizedSet
                setCurrentSet(randomizedSet)
                // Reset the count
                setRounds(1)
                // Increment level
                setLevel(level + 1)
            } else {
                // Randomize, update state
                const random = RandomizeCurrentSet(currentSet)
                setCurrentSet(random)
                setRounds(rounds + 1)
            }
            // Adding and randomizing or just randomizing, not win or lose to increment score
            setCurrentScore(currentScore + 1)            
        }        
    }
    const createGame = () => {                 
        // Create a deck of cards
        const deck = CreateDeck()        
        setDeck(deck)
        // Get four random cards from the deck
        const set = GetInitialSet(deck, 4)
        // Start with 3 full hearts
        setHeartsArr(threeLives)
        // Reset state variables 
        setCurrentSet(set)
        setRounds(1)
        setLevel(1)
        setCurrentScore(0)
        livesCount.current = 3
        const gameBoard = document.getElementById('cardGridContainer')          
        gameBoard.style.pointerEvents = 'auto';
    }
    const isWin = () => { 
        // Total deck length = 20, and 20 rounds means every card has been guessed correctly 
        if (currentSet.length === 20 && rounds === 20) { 
            return true
        }
        return false
    }

    const determineScoring = () => {
        // Always keep and display the highest score
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

    const updateLives = () => {  
        // Decrement 
        livesCount.current = livesCount.current - 1 ;     
        if (livesCount.current === 2) {
            console.log('lives == 2 executed')
            setHeartsArr(twoLives)            
        }
        else if (livesCount.current === 1) {
            console.log('lives == 2 executed')
            setHeartsArr(oneLife)            
        }
        else if (livesCount.current === 0) {
            console.log('lives == 1 executed')
            setHeartsArr(noLives)            
        }        
    }

    const playAgain = () => { 
        createGame()
    }

    useEffect(() => {    
       createGame()
    }, [])
    
    return (
        <> 
            <div className='gameHUD'>
                 <div>
                    <h3>Level: { level} / 5</h3>
                    <h3>Current: {currentScore}</h3>
                    <h3>High: {highScore}</h3>
                </div>
                <div>---------------------------------------</div>
                <p>Lives</p>
                <div className='lives'>
                    {heartsArr.map((heart, index) => { 
                        return <span key={index}>{heart}</span>
                    })}               
                </div>               
            </div>
            <div ></div>
            <button onClick={playAgain}>Play Again</button>
        <div id='cardGridContainer'>                   
            {currentSet.map((obj) => { 
                return <Card obj={obj} handleClick={handleClick} key={obj.id}></Card>
            })}
        </div>
    </>
  )
}

export default Board


