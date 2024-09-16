import { useState } from 'react'

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

const[click, setClicks] = useState({
  left: 0, right: 0
})

const handleLeftClick = () => {
  const newClicks = {
    left: setClicks.left +1,
    right: setClicks.right
  }
  setClicks(newClicks)
}



  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )
}

  

export default App