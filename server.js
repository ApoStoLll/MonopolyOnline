let Player = require('./model/player.js');
let step = require('./controller/gameCycle')
let express = require('express');
let http = require('http');
let path = require('path');
let socketIO = require('socket.io');
let app = express();
let server = http.Server(app);
let io = socketIO(server);

let port = 3000;
let players = {};

function sizeOf(arr){
    var counter = 0;
    for (var key in arr) {
        counter++;
    }
    return counter;
}

app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
server.listen(port, function() {
    console.log('Запускаю сервер на порте 3000');
});
let steps = 0;
io.on('connection', function(socket) {
    socket.on('press', function(){
        socket.emit("message", socket.id);
    });
    socket.on('new player', () => {
        players[socket.id] = new Player(socket.id);
        let posOfPlayers = [];
        //for(let i = 0; i < players.length; i++) posOfPlayers[i] = players[i].getPosition();
        let i = 0;
        let first;
        let second;
        for(let id in players){
            if(i == 0) first = id;
            else second = id;
            posOfPlayers[i] = players[id].getPosition();
            i++;
        }
        io.sockets.emit('position', posOfPlayers);
        if(sizeOf(players) > 1){
            if(step % 2 == 0) step(players[first]);
            else step(players[second]);
            io.sockets.emit('position', posOfPlayers);
            step++;
            console.log("step");
        }
        //if(gameCycle(players) == 1) io.sockets.emit('position', posOfPlayers);
    });
});



