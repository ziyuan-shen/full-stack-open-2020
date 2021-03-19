import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}
  
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
  
const Content = (props) => {
  return (
    props.parts.map(course => <Part name={course.name} exercises={course.exercises}/>)
  )
}
  
const Total = ({ exercises }) => {
  return (
    <p><strong>total of {exercises.reduce((a, b) => a + b)} exercises</strong></p>
  )
}

const Course = ({ course }) => {
    return (
        <>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total exercises={course.parts.map(course => course.exercises)}/>
        </>
    )
}
  
const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App