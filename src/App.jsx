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

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}  

export default App