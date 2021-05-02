import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'
import Notification from './Notification'
import ErrorMessage from './ErrorMessage'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterString, setFilterString ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newNumber}

        personService.update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
            setNewName("")
            setNewNumber("")
            setNotification(`Updated ${returnedPerson.name}`)
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }
    } else {
      personService.create({name: newName, number: newNumber})
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
          setNotification(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(error.response.data.error)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const handleDelete = (event, id, name) => {
    event.preventDefault()
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <ErrorMessage message={errorMessage}/>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;