const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Keycloak = require('keycloak-connect')
const cors = require('cors')

const memberroutes = require('./src/routes/Member.js')
const followroutes = require('./src/routes/Follow.js')


const memoryStore = new session.MemoryStore()

const keycloak = new Keycloak({
  store: memoryStore
}, {
  clientId: process.env.CLIENTID_KC,
  bearerOnly: true,
  serverUrl: process.env.SERVERURL_KC,
  realm: process.env.REALM_KC
})

app.use(session({
  secret: process.env.SECRET_KC,
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}))

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}))


app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//app.use('/', memberroutes)
//app.use('/', followroutes)

app.use('/', keycloak.protect('realm:master'), memberroutes)
app.use('/', keycloak.protect('realm:master'), followroutes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
