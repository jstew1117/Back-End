const express = require('express')
const app = express()

const db = require('./models')

app.use(express.json())

app.listen(3000, () => {
    console.log('app started at port 3000')
})