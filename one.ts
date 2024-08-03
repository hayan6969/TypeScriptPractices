console.log("hello from one.ts");

const obj={name:"Hayan",age:25};

//creating object with typesafety
const obj2:{name:string,age:number}={name:"Hayan",age:25};



// const num:number=5; writing this type :number is not necessary as we directly assgined a number to it so typescript is smart enough to understand it and sets the type as number
let num=5;




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
const heros=[1,2,3];

heros.map((hero)=>{
    return `hero is ${hero}`;
})

//if you want no returns u can use void or never

function sayHello(error:string):never{
    throw new Error(error)
}

function sayHello2(error:string):void{
    console.log(error)
}

function createUser(person:{name:string,isPaid:boolean}){

console.log(person.name,person.isPaid)
}

createUser({name:"Hayan",isPaid:true})


function createCourse():{name:string,isPaid:boolean}{ //will always return an object with name and isPaid
    return {name:"React",isPaid:true}
} 

const user={
    name:"Hayan",
    isPaid:true,
    age:25
}
createUser(user)


//Type Aliases

type Userr={
    name:string,
    isActive:boolean,
    email:string
}

function createUser2(user:Userr){ //sets the object type according to the type alias

    console.log(user)

}

const user22={ 
    name:"Hayan",
    
    email:"faf@afa.com",
    isActive:true
}

createUser2(user22) //the type of argument is set according to the type alias


//Readonly and optional in typescript

type UUser={
    readonly _id:string,  //no One can change the value of _id
    name:string,
    isActive:boolean,
    email:string
    ccDetails?:number //now this property is optional
}

let myUser:UUser={
    _id:"123",
    name:"Hayan",
    email:"dad@faf.com",
    isActive:true 
}


myUser.name="Hayan2"; //this is allowed
// myUser._id="1234"; //this is not allowed as _id is readonly


type cardNumber={
    cardNumber:number,
}

type cardDate={
    cardDate:string,
}

type cardDetails=cardNumber & cardDate & {
    cvv:number
}; //combining


//Union in typescript

let score:string|number="33"; //can be either string or number

type UUUSER={
    name:string,
    id:number
}

type Admin={
    username:string,
    id:number,
    
}

let hayann:UUUSER|Admin={name:"Hayan",id:1} //can be either of the two types
console.log(hayann)
hayann={username:"Hayan",id:1}
console.log(hayann)

const data:(string|number)[]=[1,2,3,4,5,6,7,8,9,10,"11"];
const data1:{}[]=[] //defined as an array of objects

let pi:3.14=3.14; //this is a literal type of assigning a value to a variable
 let seatAllotment:"window"|"middle"|"aisle"; //this is a literal type of assigning a value to a variable
seatAllotment="window";

//tuples in typescript

//a specialized array with some restrictions

const arr:(string|number) []=["Hayan","25","true",1]; //this is a normal array
let arr2:[string,number,boolean];
arr2=["Hayan",25,true]; //this is a tuple




export {} //to avoid the error of redeclaration of block scoped variable



//Interfaces in typescript

interface Userrr{

    email:string,
    userId:number
}

interface format{
    id:number,
    (name:string):string
}

type formatt={
    id:number,
    (name:string):string
}



