const path = require('path')
const express = require('express')
const hbs = require('hbs')
const departures = require('./utils/departures')
const moment = require('moment')

const app = express()
const port = 3000

// Define paths for Express configs
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Nästa avgång hem',
        name: 'Jonas Pedersen'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Om',
        name: 'Jonas Pedersen'
    })
})

app.get('/departures', (req, res) => {

    departures(req.query.latitude, req.query.longitude, (error, data) => {
        if (error) {
            console.log(error)
            return res.send({ error })
        }
        res.send({ 
            station: data.Leg[1].Origin.name,
            time: data.Leg[1].Origin.time,
            type: data.Leg[1].Product.name,
            updatedAt: moment().format('HH:mm')
        })
    })
})

app.get('/trafiklab.se', (req, res) => {
    res.redirect('https://trafiklab.se')
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jonas Pedersen',
        errorMessage: 'Sidan kunde inte hittas'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})