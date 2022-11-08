// import TwoClubs from '../assets/2Clubs.png'
// import TwoDiamonds from '../assets/2Diamonds.png'
// import TwoSpades from '../assets/2Spades.png'
// import ThreeClubs from '../assets/3Clubs.png'
// import ThreeDiamonds from '../assets/3Diamonds.png'
// import ThreeSpades from '../assets/3Spades.png'
// import FourClubs from '../assets/4Clubs.png'
// import FourDiamonds from '../assets/4Diamonds.png'
// import FourSpades from '../assets/4Spades.png'
// import FiveClubs from '../assets/5Clubs.png'
// import FiveDiamonds from '../assets/5Diamonds.png'
// import FiveSpades from '../assets/5Spades.png'
// import SixClubs from '../assets/6Clubs.png'
// import SixDiamonds from '../assets/6Diamonds.png'
// import SixSpades from '../assets/6Spades.png'
import SevenClubs from '../assets/7Clubs.png'
import SevenDiamonds from '../assets/7Diamonds.png'
import SevenSpades from '../assets/7Spades.png'
import EightClubs from '../assets/8Clubs.png'
import EightDiamonds from '../assets/8Diamonds.png'
import EightSpades from '../assets/8Spades.png'
import TenClubs from '../assets/10Clubs.png'
import AceClubs from '../assets/AceClubs.png'
import AceDiamonds from '../assets/AceDiamonds.png'
import AceSpades from '../assets/AceSpades.png'
import JackClubs from '../assets/JackClubs.png'
import JackDiamonds from '../assets/JackDiamonds.png'
import JackSpades from '../assets/JackSpades.png'
import KingClubs from '../assets/KingClubs.png'
import KingDiamonds from '../assets/KingDiamonds.png'
import KingSpades from '../assets/KingSpades.png'
import QueenClubs from '../assets/QueenClubs.png'
import QueenDiamonds from '../assets/QueenDiamonds.png'
import QueenSpades from '../assets/QueenSpades.png'
import ElevenClubs from '../assets/11Clubs.png'
// Unique ID generator
import uniqid from "uniqid";

const CreateDeck = () => { 
    const array = []
    // array.push(TwoClubs)
    // array.push(TwoDiamonds)
    // array.push(TwoSpades)
    // array.push(ThreeClubs)
    // array.push(ThreeDiamonds)
    // array.push(ThreeSpades)
    // array.push(FourClubs)
    // array.push(FourDiamonds)
    // array.push(FourSpades)
    // array.push(FiveClubs)
    // array.push(FiveDiamonds)
    // array.push(SixClubs)
    // array.push(SixDiamonds)
    // array.push(FiveSpades)
    // array.push(SixSpades)
    array.push(SevenClubs)
    array.push(SevenDiamonds)
    array.push(SevenSpades)
    array.push(EightClubs)
    array.push(EightDiamonds)
    array.push(EightSpades)
    array.push(TenClubs)
    array.push(AceClubs)
    array.push(AceDiamonds)
    array.push(AceSpades)
    array.push(JackClubs)
    array.push(JackDiamonds)
    array.push(JackSpades)
    array.push(KingClubs)
    array.push(KingDiamonds)
    array.push(KingSpades)
    array.push(QueenClubs)
    array.push(QueenDiamonds)
    array.push(QueenSpades)
    array.push(ElevenClubs)
    const objArr = []
    for (let i = 0; i < array.length; i++) { 
        const card = {
            image: array[i],
            id: uniqid(),
            clicked: false
        }
        objArr.push(card)
    }
    return objArr
}


const GetInitialSet = (deck, count) => {
    let subSet = []
    for (let i = 0; i < count; i++) { 
        const random = deck[Math.floor((Math.random() * deck.length))]
        if (subSet.some(el => el.id === random.id)) {
            i--
        } else { 
            subSet.push(random)
        }
    }
    return subSet
}

const RandomizeCurrentSet = (arr) => { 
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
}

const addRandomToCurrentSet = (deck, set ) => {
    // Add card from deck to currentSet so long as it does not already exists
    for (let i = 0; i < 4; i++){ 
        const rand = deck[Math.floor((Math.random() * deck.length))]
        if (set.some(el => el.id === rand.id)) {
            i--
        } else { 
            set.push(rand)
        }
    }                
    return set
}

const resetClickedStatus = (set) => { 
    set.forEach(item => item.clicked = false)
}

export {CreateDeck, GetInitialSet, addRandomToCurrentSet, RandomizeCurrentSet, resetClickedStatus }