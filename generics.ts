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
