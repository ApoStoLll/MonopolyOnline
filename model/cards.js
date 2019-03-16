class card{
    constructor(position,price,priceRent,priceShop,color){
        this.position = position;
        this.price = price;
        this.priceRent = priceRent;
        this.priceShop = priceShop;
        this.color = color;
        owner = -1;
        countShop = 0;
    }
    getPosition() { return position; }
    getPrice() { return price; }
    getPriceRent() { return priceRent; }
    getPriceShop() {return priceShop; }
    getOwner() { return owner; }
    setOwner( owner ) { this.owner = owner; }
    getColor() { return color; }
    getCountShops() { return countShops; }
    setCountShops() { this.countShop = countShop; }
    getType() { return 1; }
};