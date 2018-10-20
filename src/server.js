const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const http = require('http')
const path = require('path')

// initiailizing server
const app = express()
const server = http.createServer(app)

// settings
app.set('port', process.env.PORT || 8085)

// middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
//app.use(require('connect-history-api-fallback')) // para el funcionamiento de vue-router
app.use(cors())

// call routes api
const users = require('./routes/users')

// using routes api
app.use('/api/users/', users)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// starting server
server.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'))    
})