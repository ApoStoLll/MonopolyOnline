let socket = io();

let btn = document.getElementById('btn');
btn.onclick = function(){
    socket.emit('press', '');
    socket.on('message', function(data){
        console.log(data);
    });
};
console.log('drawRects');
let canvas = document.getElementById("canvas");
let view = new View(canvas);
view.createMap();
view.drawRects();