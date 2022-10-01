import coap from '../node_modules/coap/dist/index.js'
const req = coap.request({
        observe: true,  
        hostname: 'localhost',
        port: 5683,
       
    })

req.on('response', (res) => {
    res.pipe(process.stdout)
})

req.end()
