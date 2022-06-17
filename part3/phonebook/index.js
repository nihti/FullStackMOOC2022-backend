// const http = require('http')
const { request, response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).send('404 resource not found :/')
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const newId = persons.length > 0
    ? Math.round(Math.random() * 10000) : 0
  return newId
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'give all details of person'
    })
  }

  const exists = persons.find(p => p.name === body.name)
  if (exists) {
    return response.status(409).json({
      error: 'name must by unique'
    })
  }

  const person = {
    id: generateId(), 
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  response.json(person)
})

app.get('/info', (request, response) => {
  const base = `Phonebook has info for ${persons.length} people`
  const d = new Date()
  const year = d.getUTCFullYear()
  const month = d.getUTCMonth()
  const day = d.getUTCDate()
  const hour = d.getHours()
  const mins = d.getMinutes()
  const secs = d.getSeconds()
  const time = new Date(year, month, day, hour, mins, secs, 0)

  response.send(`${base} <br/><br/> ${time}`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)