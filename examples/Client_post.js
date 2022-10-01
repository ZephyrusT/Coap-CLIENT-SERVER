const coap = require('../') // or coap

function TestClient () {
const request = coap.request({
        hostname: 'localhost',
        port: 5683,
        pathname: '/test',
        method: 'POST'
    })
    
request.setOption('Content-Format', 'application/json')
request.end("It is a beautiful world")
console.log("Sent to server")
}

TestClient()