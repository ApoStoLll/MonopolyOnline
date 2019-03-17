class View{
    constructor(canvas){
        canvas.width = 880;
        canvas.height = 880;
        this.context = canvas.getContext('2d');
        this.rects = [];
        this.width = 80;
        this.height = 80;
    }
    drawPlayers(players){
        this.context.fillStyle = "rgb(255, 255, 255)";
        console.log(players.length);
        for(let i = 0; i < players.length; i++){
            let rect = this.rects[players[i]];
            console.log("pos: " + players[i]);
            new Rect(rect.getX() + 10, rect.getY() + 10, 40, 40).draw(this.context);
        }
    }
    createMap(){
        for(let i = 0; i < 11; i++) //GORIZONTAL(BOT);
            this.rects[i] = new Rect(880 - this.width * i - 80, 880 - this.height, this.width, this.height);
        for(let i = 0; i < 9; i++) //VERTICAL(LEFT);
            this.rects[11 + i] = new Rect(0, 880 - this.height * i - 160, this.width, this.height);
        for(let i = 0; i < 11; i++) //GORIZONTAL(top);
            this.rects[20 + i] = new Rect(this.width * i, 0, this.width, this.height);
        for(let i = 0; i < 9; i++) //VERTICAL(RIGHT);
            this.rects[31 + i] = new Rect(880 - this.width, 80 + this.height * i, this.width, this.height);
    }
    drawRects(){
        for(let i = 0; i < this.rects.length; i++){
            if( i % 10 == 0 ) this.context.fillStyle = "rgb(255, 248, 220)";
            if (i == 2 || i == 4 || i == 8 || i == 12 || i == 17 || i == 23 || i == 27 || i == 32 || i == 36 || i == 38) 
            this.context.fillStyle = "rgb(255, 255, 255)";
            if( i == 1 || i == 3 ) this.context.fillStyle = "rgb(75, 0, 130)";
            if( i % 10 == 5 ) this.context.fillStyle = "rgb(255, 140, 0)";
            if ( i == 6 || i == 7 || i == 9) this.context.fillStyle = "rgb(0, 128, 0)";
            if ( i == 11 || i == 13 || i == 14) this.context.fillStyle = "rgb(255, 0, 0)";
            if ( i == 16 || i == 18 || i == 19) this.context.fillStyle = "rgb(192, 192, 192)";
            if ( i == 21 || i == 22 || i == 24) this.context.fillStyle = "rgb(0, 0, 255)";
            if ( i == 26 || i == 28 || i == 29) this.context.fillStyle = "rgb(139, 69, 19)";
            if ( i == 31 || i == 33 || i == 34) this.context.fillStyle = "rgb(0, 0, 0)";
            if ( i == 39 || i == 37) this.context.fillStyle = "rgb(255, 20, 147)";
            this.rects[i].draw(this.context);
            document.getElementById("buyBtn").style.visibility = "hidden";
            document.getElementById("skipBtn").style.visibility = "hidden";
            document.getElementById("finishBtn").style.visibility = "hidden";
        }
    };
    skipOrBuy(){
        document.getElementById("buyBtn").style.visibility = "visible";
        document.getElementById("skipBtn").style.visibility = "visible";
    }
    menu(){
        document.getElementById("finishBtn").style.visibility = "visible";
    }
};
function buy(){
    document.getElementById("buyBtn").style.visibility = "hidden";
    document.getElementById("skipBtn").style.visibility = "hidden";
    return 1;
}
function skip(){
    document.getElementById("buyBtn").style.visibility = "hidden";
    document.getElementById("skipBtn").style.visibility = "hidden";
    return 0;
}
function finish(){
    document.getElementById("finishBtn").style.visibility = "hidden";
    return 0;
}








