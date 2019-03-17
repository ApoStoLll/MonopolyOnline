function random( max = 6 ) { return Math.floor(Math.random() * (max + 1)); }
let numOfStep = 0;

/*function gameCycle(players){
    if(players.length <= 1) return 0;
    if(numOfStep % 2 == 0) step(players[0]);
    else step(players[1]);
    return 1;
}*/

function step(player){
    let a = random();
    let b = random();
    player.setPosition(player.getPosition() + a + b);
}

module.exports = step;