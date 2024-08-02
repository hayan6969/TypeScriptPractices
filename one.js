"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello from one.ts");
var obj = { name: "Hayan", age: 25 };
//creating object with typesafety
var obj2 = { name: "Hayan", age: 25 };
// const num:number=5; writing this type :number is not necessary as we directly assgined a number to it so typescript is smart enough to understand it and sets the type as number
var num = 5;
//Any
// let hero:string;  //in this case the type declaration is necessary to avoid any type
// function getHero(){ 
//    return "Batman";
// }   
// hero=getHero();  //here the hero variable is of type any which is not a good practice
//functions in typescript
// function add2(num:number){
//     return num+2;
// }
// add2(5);
//you can fix returns too which is a better practice
// function aad2(num:number):number{ //here we are telling the function to return a number
//     return num+2;
// }
//fucntions with multiple return types
// const getHello=(s:string):string=>{
// return ""
// }
// const heros=["Batman","Superman","Flash"];
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//if you want no returns u can use void or never
function sayHello(error) {
    throw new Error(error);
}
function sayHello2(error) {
    console.log(error);
}
function createUser(person) {
    console.log(person.name, person.isPaid);
}
createUser({ name: "Hayan", isPaid: true });
function createCourse() {
    return { name: "React", isPaid: true };
}
var user = {
    name: "Hayan",
    isPaid: true,
    age: 25
};
createUser(user);
function createUser2(user) {
    console.log(user);
}
var user22 = {
    name: "Hayan",
    email: "faf@afa.com",
    isActive: true
};
createUser2(user22); //the type of argument is set according to the type alias
var myUser = {
    _id: "123",
    name: "Hayan",
    email: "dad@faf.com",
    isActive: true
};
myUser.name = "Hayan2"; //this is allowed
//Union in typescript
var score = "33"; //can be either string or number
var hayann = { name: "Hayan", id: 1, username: "Hayan" }; //can be either of the two types
console.log(hayann);
hayann = { username: "Hayan", id: 1 };
console.log(hayann);
