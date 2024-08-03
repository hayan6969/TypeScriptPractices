//we will discuss the interface vs type in typescript

//you can re-open an interface in typescript and add more properties

interface User{
    email:string,
    userId:number
}

interface User{
    name:string
}

let hayan:User={
    email:"dcaca",
    userId:1,
    name:"Hayan"
}  

//interface also have inheritance

interface Admin extends User{    //add , after User to inherit from multiple interfaces
    adminId:number
}

let admin:Admin={
    email:"dcaca",
    userId:1,
    name:"Hayan",
    adminId:1
}


 //private class members in typescript

    class User1{

        //for private in javascript, we use # before the variable name
        private email:string;  //cant be accessed outside the class
        public userId:number;  //can be accessed outside the class, automatically public if not specified
    
        constructor(email:string,userId:number){
            this.email=email;
            this.userId=userId;
        }

    }

    let user1=new User1("dcaca",1);
    // console.log(user1.email) //this will give an error because email is private