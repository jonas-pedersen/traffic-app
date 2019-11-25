const statusMessage = document.querySelector('#status-message')

const destLocation = [
    {
        name: 'mariehem',
        latitude: 63.835968,
        longitude: 20.323416 
    }, {
        name: 'tomtebo',
        latitude: 63.804988,
        longitude: 20.344365
    }, {
        name: 'vannas',
        latitude: 63.908008,
        longitude: 19.752966
    }
]

// Initialize Page
destLocation.forEach((location) => {
    fetch('/departures?latitude=' + location.latitude + '&longitude=' + location.longitude).then((response) => {
        response.json().then((data) => {
            if (data.errorCode) {
                statusMessage.textContent = data.errorCode
            } else {
                document.querySelector(`#${location.name}-station`).textContent = data.station
                document.querySelector(`#${location.name}-time`).textContent = data.time
                document.querySelector(`#${location.name}-type`).textContent = data.type
                statusMessage.textContent = `Avgångar uppdaterade: ${data.updatedAt}`
            }
        })
    })
})

// Updates departures every minute
setInterval(() => {
    destLocation.forEach((location) => {

            fetch('/departures?latitude=' + location.latitude + '&longitude=' + location.longitude).then((response) => {
            response.json().then((data) => {
                if (data.errorCode) {
                    statusMessage.textContent = data.errorCode
                } else {
                    document.querySelector(`#${location.name}-station`).textContent = data.station
                    document.querySelector(`#${location.name}-time`).textContent = data.time
                    document.querySelector(`#${location.name}-type`).textContent = data.type
                    statusMessage.textContent = `Avgångar uppdaterade: ${data.updatedAt}`

                }
            })
        })
    })
}, 60000);