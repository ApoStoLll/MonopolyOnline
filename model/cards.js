class Card{
    constructor(position,price,priceRent,priceShop,color){
        this.position = position;
        this.price = price;
        this.priceRent = priceRent;
        this.priceShop = priceShop;
        this.color = color;
        this.owner = -1;
        this.countShop = 0;
    }
    getPosition() { return this.position; }
    getPrice() { return this.price; }
    getPriceRent() { return this.priceRent; }
    getPriceShop() {return this.priceShop; }
    getOwner() { return this.owner; }
    setOwner( owner ) { this.owner = owner; }
    getColor() { return this.color; }
    getCountShops() { return this.countShops; }
    setCountShops() { this.countShop = countShop; }
    getType() { return 1; }
};