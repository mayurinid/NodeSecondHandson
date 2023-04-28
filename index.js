const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.get('/', (req, res)=> {
  res.send('Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects. World')
})
const port=process.env.PORT
app.listen(port,
    console.log(`server is run in port ${port}`)
    )