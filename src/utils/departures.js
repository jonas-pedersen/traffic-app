const request = require('request')

const departures = (latitude, longitude, callback) => {
    const url = 'https://api.resrobot.se/v2/trip?key=d4413d4e-49da-4fe5-bb8c-acad051b3aab&originCoordLat=63.829059&originCoordLong=20.259632&destCoordLat=' + latitude + '&destCoordLong=' + longitude + '&originWalk=1,0,600,75&passlist=0&format=json'

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to traffic service! ' + error, undefined)
        } else if (body.errorCode) {
            callback('Connected to traffic service but could not recieve data. Possible problem: Old API key' + body.errorCode, undefined)
        } else {
            callback(undefined, body.Trip[0].LegList)
        }
    })
}

module.exports = departures