import { useState } from 'react'
import History from './History'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {

/*
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)


  const increaseByOne = () =>{
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  } 
  
  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>

      <Display counter={counter}/>
      <Button 
      handleClick={increaseByOne}
      text='plus'
      />

      <Button 
      handleClick={setToZero} 
      text= 'zero'
      />

      <Button
      handleClick={decreaseByOne}
      text='minus'
      />
    </div>
  )
*/

const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])
const [total, setTotal] = useState(0)

const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  console.log('left before', left)
  const updatedLeft = left + 1
  setLeft(updatedLeft)
  console.log('left after', left)
  setTotal(updatedLeft + right)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  console.log('right before', right)
  const updatedRight = right + 1
  setRight(updatedRight)
  console.log('right after', right)
  setTotal(updatedRight + left)

}

return (
  <div>
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div>
  </div>
)
}
  

export default App