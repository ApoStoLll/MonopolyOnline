const Game = require('./controller/gameController');
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);

const port = 3000;
let game = new Game(io);


io.on('connection', (socket) => {
    socket.on('new player', () => {
        game.createPlayer(socket);
        console.log(socket.id);
    });
    socket.on('disconnect', () => {
        game.removePlayer(socket);
    });
    if(game.counter > 1){
        game.cycle();
    }
});

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


/*let steps = 0;
let i = 0;
let first;
let second;

function sizeOf(arr){
    var counter = 0;
    for (var key in arr) {
        counter++;
    }
    return counter;
}

function setFirstAndSecond(){
    for(let id in players){
        //console.log('func' + id);
        if(i == 0) first = id;
        if(i == 1) second = id;
        i++;
    }
}


function step(player){
    let a = random();
    let b = random();
    console.log('step: ' + player);
    player.position = player.position() + a + b;
}

function gameCycle(socket){
    console.log('PLAYERSgame: ' + JSON.stringify(players));
    console.log('game, player.first ' + JSON.stringify(players[first]));
    if(sizeOf(players) > 1){
        if(step % 2 == 0) step(players.first);
        else step(players.second);
        io.sockets.emit('position', posOfPlayers);
        step++;
    }
}

io.on('connection', function(socket) {
    socket.on('press', function(){
        gameCycle(socket);
    });
    socket.on('new player', () => {

        /*players[socket.id] = new Player(socket.id);
        let posOfPlayers = [];
        //for(let i = 0; i < players.length; i++) posOfPlayers[i] = players[i].getPosition();
        for(let id in players)
            posOfPlayers[i] = players[id].getPosition();
        //console.log("Players: " + JSON.stringify(players));
        //console.log("id" + JSON.stringify(players[socket.id]));
        io.sockets.emit('position', posOfPlayers);
        if(sizeOf(players) > 1) setFirstAndSecond();
    });
});*/