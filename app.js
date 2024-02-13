const express = require('express')
const cors = require("cors")
const linkRouter = require("./routes/links.routes")
const userRouter = require("./routes/users.routes")
const app = express()
app.use(express.json());

app.use(cors())
app.use('/api/v1/links', linkRouter)
app.use('/api/v1/users', userRouter)

module.exports = { app }