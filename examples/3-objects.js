const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=c5685be1a168313c06deaba5171960cd&query=40,-75'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error', error)
})

request.end()