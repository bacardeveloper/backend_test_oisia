const express = require('express')
const helmet = require("helmet")
const cors = require('cors')

const { errorHandler } = require('./middlewares/errorHandler')
const userRoute = require('./routes/user.routes')

const app = express()

const corsSettings = { methods: 'GET,POST', allowedHeaders: 'Content-Type,Authorization' };

app.use(cors(corsSettings))
app.use(express.json())
app.use(helmet())


app.use('/api/user', userRoute)

app.use(errorHandler)

module.exports = app