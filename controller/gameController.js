let Player = require('../model/player');
class gameController{
    constructor(io){
        this.io = io;
        this.players = {};
        this.counter = 0;
    }

    random( max = 6 ) { return Math.floor(Math.random() * (max + 1)); }

    createPlayer(socket){
        this.players[socket.id] = new Player(this.counter);
        this.counter++;
        let posOfPlayers = getPosOfPlayers();
        io.emit('position', posOfPlayers);
    }

    removePlayer(socket){
        for(let id in this.players){
            if(players[id] == socket.id) delete this.players.id;
        }
        counter--;
    }

    cycle(){
        let going = 0;
        for(let id in this.players){
            setInterval(() => {
                step(id);
                io.sockets.socket(id).emit('menu');
            }, 30000)
            socket.on('endOfStep', () => {
                clearInterval();
            });
        }
    }
    step(id){
        this.players[id].setPosition(this.players[id].getPosition() + random() + random());
        let posOfPlayers = getPosOfPlayers();
        io.emit('position', posOfPlayers);
    }
    getPosOfPlayers(){
        let posOfPlayers = [];
        let j = 0;
        for(let i in this.players){
            posOfPlayers[j] = this.players[i];
            j++;
        }
        return posOfPlayers;
    }
}
module.exports = gameController;