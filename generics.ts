//generics in typescript

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//instead of this and as we have to avoid any, we can use generics

function indentityTwo<T>(val: T): T {
  console.log(val);
  return val;
}

indentityTwo(1);

interface Bottle {
  brand: string;
  type: string;
}

indentityTwo<Bottle>({ brand: "a", type: "b" }); //giving it a custom interface

//generics in arrays and arrow functions

function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  //we will find <T,> in many places liek react to tell that its not an html tag but a generic
  //do some database operations
  return products[0];
};

//Generics in classes

interface Quiz {
  question: string;
  answer: string;
}

interface Course {
  title: string;
  price: number;
}

class Sellable<T> {
  // constructor(public Cart:T[]){}
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

//type narrowing in typescript

function detectType(val: string | number) {
 typeof val==='string'?val.toLowerCase:val+3
}

function provideId(id:string | null){
!id?console.log('no id'):console.log(id)
}


//Instance of and type predicates

function logValue(x: Date|string){
    if(x instanceof Date){  //used where new keyword can be potentially used
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}


type Fish = {swim:()=>void}
type Bird = {fly:()=>void}

function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood (pet: Fish | Bird){
    (isFish(pet))?"fish food":"bird food"
}



//Discriminated Unions and Exhaustiveness checking

interface Circle{
    kind:'circle';
    radius:number;
    
}

interface Square{
    kind:'square';
    side:number;
}

interface Rectangle{
    kind:'rectangle';
    width:number;
    height:number;
}



type Shape=Circle|Square|Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==='circle'){
        return Math.PI*shape.radius**2
    }
    // return shape.side * shape.side
}


//Exhaustiveness checking

function getShape(shape:Shape){
    switch(shape.kind){
        case 'circle':return Math.PI*shape.radius**2
        case 'square':return shape.side * shape.side
        case 'rectangle':return shape.width * shape.height
        default: const _defaultForShape:never=shape
        return _defaultForShape
    }
}









const log=(shape:Circle|Square|Rectangle)=>{
    return shape
}

console.log(log({kind:'circle',radius:3}))