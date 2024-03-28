require('dotenv').config()

require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 8000

const app = require('./app-server')

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}. We in the Building`)
})
