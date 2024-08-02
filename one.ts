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