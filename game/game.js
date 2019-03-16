let socket = io();

let btn = document.getElementById('btn');
btn.onclick = function(){
    socket.emit('press', '');
    socket.on('message', function(data){
        console.log(data);
    });
};