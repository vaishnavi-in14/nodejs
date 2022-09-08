const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())

data.name = 'Vaish'
data.age = 23

const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)