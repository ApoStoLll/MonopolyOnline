let Player = require('../model/player');
class gameController{
    constructor(io){
        this.io = io;
        this.players = {};
        this.counter = 0;
    }

    getPosOfPlayers(){
        let posOfPlayers = [];
        let j = 0;
        for(let i in this.players){
            posOfPlayers[j] = this.players[i].getPosition();
            j++;
        }
        //console.log('pos: ' + JSON.stringify(posOfPlayers));
        return posOfPlayers;
    }

    random( ) { return Math.floor(Math.random() * (6 + 1)); }

    createPlayer(socket){
        this.players[socket.id] = new Player(this.counter);
        console.log('befor += 1: ' + this.counter);
        this.counter = this.counter + 1;
        console.log('after += 1: ' + this.counter);
        //console.log('this: ' + JSON.stringify(this.getPosOfPlayers()));
        let posOfPlayers = this.getPosOfPlayers();
        this.io.emit('position', posOfPlayers);
    }

    removePlayer(socket){
        for(let id in this.players){
            if(this.players[id] == socket.id) delete this.players.id;
        }
        this.counter--;
    }

    cycle(socket){
        let going = 0;
        for(let id in this.players){
            this.step(id);
            this.io.eio.clients[id].emit('menu');
            let timerId = setTimeout(() => {
                this.io.eio.clients[id].emit('end');
            }, 30000);
            socket.on('action', (data) => {
                if(data == 'end') clearTimeout(timerId);
            });
        }
    }
    step(id){
        console.log('step');
        this.players[id].setPosition(this.players[id].getPosition() + this.random() + this.random());
        let posOfPlayers = this.getPosOfPlayers();
        this.io.emit('position', posOfPlayers);
    }
}
module.exports = gameController;