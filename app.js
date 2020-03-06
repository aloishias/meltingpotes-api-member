const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3200
const cors = require('cors')

const memberroutes = require('./src/routes/Member.js')
const followroutes = require('./src/routes/Follow.js')


app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', memberroutes)
app.use('/', followroutes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
