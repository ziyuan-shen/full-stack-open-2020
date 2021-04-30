require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const Person = require('./models/person')

app.get('/info', (request, response) => {
    Person.find({}).then(result => {
        response.send(`<div>Phonebook has info for ${result.length} people</div>`
          + `<div>${new Date()}</div>`)
    }) 
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(result => {
        response.json(result)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(result => {
        if (result) {
            response.json(result)
        } else {
            response.status(404).end()
        }
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
