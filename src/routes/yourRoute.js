import express from 'express'  // ES6 module
const Route = express.Router()

const yourControler = require() // instert your controler here

Route
  .post('/', yourControler.yourActionincontroler)
  .patch('/:id', yourControler.yourActionincontroler) // edit your data
  .delete('/:id', yourControler.yourActionincontroler)
  .get('/', yourControler.yourActionincontroler)

module.exports = Route
