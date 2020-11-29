$(function (){
    var socket = io();
    $('#send').on('click', function (event) {
       event.preventDefault();
       socket.emit('message', $('#messagearea').val());
       $('#messagearea').val('');
       return false;
         
       
    });
    socket.on('message', function(msg){
           $("#messages").append($('<li>').text(msg))
       })
       
       $('#messagearea').on('keypress',function(e) {
        if(e.which == 13) {
            socket.emit('message', $('#messagearea').val());
       $('#messagearea').val('');
       return false;
        }
    });
});