class player{
    constructor(number){
        money = 1500000;
        this.number = number;
        position = 0;
    }
    getMoney(){ return money; }
    setMoney(money){ this.money = money; }
    getPosition() {return position; }
    setPosition(position) {this.position = position; }
    getNumber() { return number; }
    setNumber(number) { this.number = number; }
    random( max = 6 ){ return Math.floor(Math.random() * (max + 1)); }
    payRent(player){
        rentPrice = player.findCard(position).getPriceRent(); // дописать findCard
        money = money - rentPrice;
        player.setMoney(player.getMoney() + rentPrice);
    }
    buyCard(card){
        card.setOwner(number);
        money = money - card.getPrice();
        // + засунуть в массив карточе игрока
    }
};