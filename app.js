const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Models and others
const errorController = require('./controllers/error')

const app = express()

// env config
require('dotenv').config()

// view engine setup
app.set('view engine', 'ejs')
app.set('views', 'views')

// Routers init
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')

// express config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Routers use
app.use('/', indexRouter)
app.use('/admin/', adminRouter)

// catch 404 and forward to error handler
app.use(errorController.get404)


// database connect
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@website.omhpxao.mongodb.net/webpage?retryWrites=true&w=majority`)
  .then(result => {
    const port = process.env.PORT || 3000
    console.log('Connect to DB')
    app.listen(port, () => console.log(`App starts on port ${port}`))
  })

module.exports = app
