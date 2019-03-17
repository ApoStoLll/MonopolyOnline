class Roflan{
    constructor(position,type){
        this.position = position;
        this.type = type;
    }
    getType() { return this.type; }
    getPosition() { return this.position; }
    action(player){
        if ( this.type == 1 ) { karaganda(player); }
        if ( this.type == 2 ) {}
    }
    karaganda(player){
        
    }
};