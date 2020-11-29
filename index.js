var app = require('express')();
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var express = require('express')
var PORT = process.env.PORT || 3001;

app.use(express.static('public'))
// app.get("/", function(req, res) {
//     res.sendFile(__dirname + '/index.html');
//   });

  io.on('connection', (socket) => {
      console.log('connection success')
      socket.on('disconnect', () => {
          console.log('disconnect success')
      })
    socket.on('message', (msg) => {
        console.log('Message: ' + msg)
        io.emit('message', msg)
    })
  })

  http.listen(PORT, () => {
      console.log("daddy's listening on 3001")
  })
