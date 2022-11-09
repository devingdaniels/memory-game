import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart} from 'react-icons/bs'

const threeLives = [ <BsSuitHeartFill size={40} color={'red'} />, <BsSuitHeartFill size={40} color={'red'} />, <BsSuitHeartFill size={40} color={'red'} />]

const twoLives = [ <BsSuitHeartFill size={40} color={'red'} />, <BsSuitHeartFill size={40} color={'red'} />, <BsSuitHeart size={40} color={'white'} />]

const oneLife = [<BsSuitHeartFill size={40} color={'red'} />, <BsSuitHeart size={40} color={'white'} />, <BsSuitHeart size={40} color={'white'} />]

const noLives = [<BsSuitHeart size={40} color={'white'} />, <BsSuitHeart size={40} color={'white'} />, <BsSuitHeart size={40} color={'white'} />]


export { threeLives, twoLives, oneLife, noLives}