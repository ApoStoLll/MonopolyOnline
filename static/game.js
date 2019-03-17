let socket = io();

let btn = document.getElementById('btn');
btn.onclick = function(){
    socket.emit('press', '');
    socket.on('message', function(data){
        console.log(data);
    });
};
socket.on('position', (players) => {
    console.log("DRAWING RECTS");
    console.log(players.length);
    view.drawRects();
    console.log("DRAWING PLAYERS");
    view.drawPlayers(players);
    console.log("PLAYERS END");
});

let canvas = document.getElementById("canvas");
let view = new View(canvas);
view.createMap();
view.drawRects();
socket.emit('new player');