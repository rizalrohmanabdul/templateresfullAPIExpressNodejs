require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 3333

app.listen(port, () => {
  console.log(`\n App ini berjalan di port/ App listening on port ${port} \n `)
})
