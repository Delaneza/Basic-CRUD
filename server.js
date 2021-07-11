require('dotenv').config({})

const port = process.env.PORT

const express = require('express')
const server = express()

const morgan = require('morgan')

const productRoutes = require('./src/products/routes')
const userRoutes = require('./src/users/routes')

const errorHandler = require('./src/middleware/error.handler')

server.use(morgan('dev'))
server.use(express.json())
server.use('/products', productRoutes)
server.use('/users', userRoutes)


// error handling with middleware
server.use(errorHandler)


// server
server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})