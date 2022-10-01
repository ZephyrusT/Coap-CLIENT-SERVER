import coap from '../node_modules/coap/dist/index.js'
import { Observable } from '../node_modules/object-observer/dist/object-observer.min.js';
var n = 0;
var data = [], observableA = Observable.from(data);
const server = coap.createServer()
server.on('request', (req, res) => {
    if (req.headers.Observe === 0) {
        Observable.observe(observableA, changes=>changes.forEach(change=> {
            res.write(change.value+"\n")
        }))

    }

    else if (req.method == "POST") {
        n++;
        console.log(req._packet.payload.toString())
        var text = req._packet.payload.toString()
        observableA.push(text)
    }

})
server.listen(() => {
    console.log('server started')
})
