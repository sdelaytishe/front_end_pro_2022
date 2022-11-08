function Hamburger(size) {
    this._size = size;
    this._toppings = [];
    this._price = size.price;
    this._callories = size.callories;
}

Hamburger.SMALL_SIZE = { label: 'Small size', price: 50, callories: 100 };
Hamburger.BIG_SIZE = { label: 'Big size', price: 100, callories: 200 };

Hamburger.TOPPING_MAYO = { label: 'Mayo', price: 60, callories: 2000 };
Hamburger.TOPPING_KETCHUP = { label: 'Ketchup', price: 40, callories: 200 };
Hamburger.TOPPING_CHEESE = { label: 'Cheese', price: 100, callories: 50 };

Hamburger.prototype.addTopping = function (topping) {
    this._toppings.push(topping);

    this._calculate();
    return this;
};

Hamburger.prototype._calculate = function () {
    this._price = this._toppings.reduce(
        (acc, { price }) => acc + price,
        this._size.price
    );

    this._callories = this._toppings.reduce(
        (acc, { callories }) => acc + callories,
        this._size.callories
    );
};

Hamburger.prototype.getPrice = function () {
    return this._price;
};

Hamburger.prototype.getCallories = function () {
    return this._callories;
};

const hum = new Hamburger(Hamburger.SMALL_SIZE);

hum.addTopping(Hamburger.TOPPING_MAYO)
    .addTopping(Hamburger.TOPPING_CHEESE)
    .addTopping(Hamburger.TOPPING_KETCHUP);
hum.addTopping(Hamburger.TOPPING_KETCHUP);

// hum.getPrice(); // 150
// hum.getCallories(); // 2300

// hum.addTopping(TOPPING_MAYO);

// hum.getPrice(); // 210
// hum.getCallories(); // 4300