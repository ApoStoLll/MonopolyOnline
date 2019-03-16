class View{
    constructor(canvas){
        canvas.width = 800;
        canvas.height = 800;
        this.context = canvas.getContext('2d');
        this.rects = [];
        this.width = 80;
        this.height = 80;
    }
    createMap(){
        for(let i = 0; i < 11; i++) //GORIZONTAL(top);
            this.rects[i] = new Rect(this.width * i, 0, this.width, this.height);
        for(let i = 0; i < 9; i++) //VERTICAL(RIGHT);
            this.rects[11 + i] = new Rect(800 - this.width, 80 + this.height * i, this.width, this.height);
        for(let i = 0; i < 11; i++) //GORIZONTAL(BOT);
            this.rects[20 + i] = new Rect(800 - this.width * i - 80, 800 - this.height, this.width, this.height);
        for(let i = 0; i < 9; i++) //VERTICAL(LEFT);
            this.rects[31 + i] = new Rect(0, 800 - this.height - 80 * i, this.width, this.height);
    }
    drawRects(){
        /*this.rects.forEach(function(rect, i, rects){
            rect.draw(this.context);
        });*/
        let count = 0;
        this.context.fillStyle = "rgb(110, 0, 212)";
        for(let i = 0; i < this.rects.length; i++){
            if(count === 2) this.context.fillStyle = "rgb(255, 133, 0)";
            if(count === 4) this.context.fillStyle = "rgb(0, 134, 0)";
            if(count === 6) this.context.fillStyle = "rgb(191, 0, 0)";
            if(count === 8) this.context.fillStyle = "rgb(132, 132, 132)";
            if(count === 10) this.context.fillStyle = "rgb(0, 115, 255)";
            if(count === 12) this.context.fillStyle = "rgb(124, 70, 14)";
            if(count === 14) this.context.fillStyle = "rgb(31, 31, 31)";
            if(count === 16) this.context.fillStyle = "rgb(222, 14, 199)";
            if(count === 18) this.context.fillStyle = "rgb(255, 133, 0)";
            if(count === 20) this.context.fillStyle = "rgb(0, 134, 0)";
            if(count === 22) this.context.fillStyle = "rgb(191, 0, 0)";
            if(count === 24) this.context.fillStyle = "rgb(132, 132, 132)";
            if(count === 26) this.context.fillStyle = "rgb(0, 115, 255)";
            this.rects[i].draw(this.context);
            count ++;
        }
    };
}









