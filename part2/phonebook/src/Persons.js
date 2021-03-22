import React from 'react'

const Persons = ({persons, filterString}) => {
    return (
        persons.filter(person => person.name.includes(filterString)).map(person => <div key={person.name}>{person.name} {person.number}</div>)
    )
}

export default Persons;