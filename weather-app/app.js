const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('Please enter the address')
} else {
    geocode(address, (error, {lat, long, loc}) => {
        if(error) {
            return console.log(error)
        }
        forecast(lat, long, (error, data) => {
            if(error) {
                return console.log(error)
            }
            console.log(loc)
            console.log(data)
        })
    })
}

//42- todo