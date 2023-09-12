const app = require('express')(),
protobuf = require('protobufjs'),
fs = require('fs')

//Sync
/*
const loadProto = protobuf.load('user.proto')
const reqProto = loadProto.lookup('users.req')
const resProto = loadProto.lookup('users.res')
const bulkProto = loadProto.lookup('users.bulk')
*/


//Async
(
    async _ =>{
        const loadProto = protobuf.loadSync('user.proto');

    }
)()
const JSONdata = JSON.parse(fs.readFileSync('data.json'))

app.get('/req-json',(_,res)=>{
    const buffer = reqProto.encode({mobile:"12323232",password:"hello"}).finish()
    res.send(buffer)
})

app.get('/req-header',(_,res)=>{
     
})
app.listen(3000)