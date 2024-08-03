//generics in typescript
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
//instead of this and as we have to avoid any, we can use generics
function indentityTwo(val) {
    console.log(val);
    return val;
}
indentityTwo(1);
indentityTwo({ brand: "a", type: "b" }); //giving it a custom interface
//generics in arrays and arrow functions
function getSearchProducts(products) {
    return products[0];
}
var getMoreSearchProducts = function (products) {
    //we will find <T,> in many places liek react to tell that its not an html tag but a generic
    //do some database operations
    return products[0];
};
var Sellable = /** @class */ (function () {
    function Sellable() {
        // constructor(public Cart:T[]){}
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
//type narrowing in typescript
function detectType(val) {
    typeof val === 'string' ? val.toLowerCase : val + 3;
}
function provideId(id) {
    !id ? console.log('no id') : console.log(id);
}
//Instance of and type predicates
function logValue(x) {
    if (x instanceof Date) { //used where new keyword can be potentially used
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    (isFish(pet)) ? "fish food" : "bird food";
}
var log = function (shape) {
    return shape;
};
console.log(log({ kind: 'circle', radius: 3 }));
