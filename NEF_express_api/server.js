const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
	console.log('called')
	res.json({msg:'hello world'})
})

app.listen(port,() => {
	console.log(`Listening on ${port} ...`)
})