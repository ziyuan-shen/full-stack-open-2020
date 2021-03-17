import React, { useState } from 'react'

const handleClick = (count, setCount) => {
  return () => setCount(count + 1)
}

const Button = ({ text, count, setCount }) => {
  return (
    <button onClick={handleClick(count, setCount)}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  if (all === 0) {
    return <div>No feedback given</div>
  } else {
    return (
      <>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {(good - bad) / all}</div>
        <div>positive {good / all * 100} %</div>
      </>
    )
  }
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App