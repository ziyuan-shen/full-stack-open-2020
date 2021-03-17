import React, { useState } from 'react'

const handleClick = (count, setCount) => {
  return () => setCount(count + 1)
}

const Button = ({ text, count, setCount }) => {
  return (
    <button onClick={handleClick(count, setCount)}>{text}</button>
  )
}

const Stat = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" count={good} setCount={setGood}/>
      <Button text="neutral" count={neutral} setCount={setNeutral}/>
      <Button text="bad" count={bad} setCount={setBad}/>
      <h1>statistics</h1>
      <Stat text="good" value={good}/>
      <Stat text="neutral" value={neutral}/>
      <Stat text="bad" value={bad}/>
      <Stat text="all" value={good + neutral + bad}/>
      <Stat text="average" value={(good - bad) / (good + bad + neutral)}/>
      <Stat text="positive" value={good / (good + bad + neutral) * 100 + "%"}/>
    </div>
  )
}

export default App