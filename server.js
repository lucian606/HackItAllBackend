const express = require('express')
const app = express()
const port = 3000

const router = require('./router.js')

app.use(express.static('public'))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`REST API server running at http://localhost:${port}`)
  });