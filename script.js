class Hamburger {
    
    constructor(sizeProperties) {
        this.price = sizeProperties.price;
        this.calories = sizeProperties.calories;
    }

    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_MIDDLE = {price: 75, calories: 30};
    static SIZE_BIG = {price: 100, calories: 40};

    static TOPPING_MAYO = {price: 20, calories: 5};
    static TOPPING_SAUCE = {price: 15, calories: 0};
    static TOPPING_POTATO = {price: 15, calories: 10};
    static TOPPING_SALAD = {price: 20, calories: 5};
    static TOPPING_CHEESE = {price: 10, calories: 20};


    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.calories;
    }

    addTopping(topping) {
        this.price = this.price + topping.price;
        this.calories = this.calories + topping.calories;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// const hamburger = new Hamburger(Hamburger.SIZE_MIDDLE);
// const hamburger = new Hamburger(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// hamburger.addTopping(Hamburger.TOPPING_SALAD);
// hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log('Price with sauce: ' + hamburger.getPrice());

console.log('Calories with sauce: ' + hamburger.getCalories());