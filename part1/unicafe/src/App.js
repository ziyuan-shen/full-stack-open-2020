import React, { useState } from 'react'

const handleClick = (count, setCount) => {
  return () => setCount(count + 1)
}

const Button = ({ text, count, setCount }) => {
  return (
    <button onClick={handleClick(count, setCount)}>{text}</button>
  )
}
const Statistic = ({ title, value}) => <div>{title} {value}</div>

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  if (all === 0) {
    return <div>No feedback given</div>
  } else {
    return (
      <>
        <Statistic title="good" value={good}/>
        <Statistic title="neutral" value={neutral}/>
        <Statistic title="bad" value={bad}/>
        <Statistic title="all" value={all}/>
        <Statistic title="average" value={(good - bad) / all}/>
        <Statistic title="positive" value={good / all * 100 + "%"}/>
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