import React from 'react'

const Persons = ({persons, filterString, handleDelete}) => {
    return (
        persons.filter(person =>
          person.name.includes(filterString)).map(person =>
            <div key={person.name}>
                {person.name} {person.number} <button onClick={(e) => handleDelete(e, person.id, person.name)}>delete</button>
            </div>
        )
    )
}

export default Persons;