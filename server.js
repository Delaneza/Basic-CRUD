const port = 3000

const express = require('express')
const server = express()

const routes = require('./src/products/routes')
const errorHandler = require('./src/middleware/error.handler')

server.use(express.json())
server.use('/products', routes)


// error handling with middleware
server.use(errorHandler)


// server
server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
