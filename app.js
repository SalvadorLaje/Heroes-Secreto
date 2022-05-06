const express = require('express')
const app = express()
const mainRouter = require('./routers/')
const path = require('path')
const port = 3000

app.use('/', mainRouter)

app.listen(process.env.PORT || port, () => {
  console.log(`Corriendo servidor en puerto ${port}`)
})

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'/public')))

