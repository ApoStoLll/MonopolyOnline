class Player{
    constructor(number){
        this.money = 1500000;
        this.number = number;
        this.position = 0;
        this.cards = [];
    }
    getMoney(){ return this.money; }
    setMoney(money){ this.money = money; }
    getPosition() {return this.position; }
    setPosition(position) {this.position = position; }
    getNumber() { return this.number; }
    setNumber(number) { this.number = number; }
    random( max = 6 ) { return Math.floor(Math.random() * (max + 1)); }
    findCard(position){
        for(let i = 0; i < this.cards.lenght;i++){
           if (this.cards[i].getPosition === position) return this.cards[i];
        }
    }
    payRent(player){
        let rentPrice = player.findCard(position).getPriceRent();
        this.money = this.money - rentPrice;
        player.setMoney(player.getMoney() + rentPrice);
    }
    buyCard(card){
        card.setOwner(number);
        this.money = this.money - card.getPrice();
        this.cards[this.cards.length] = card;
    }
};