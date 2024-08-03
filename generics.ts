//generics in typescript

const score:Array<number> = [];
const names:Array<string> = [];

function identityOne(val:boolean | number):boolean | number{
    return val;
}

//instead of this and as we have to avoid any, we can use generics

function indentityTwo<T>(val:T):T{
    console.log(val)
    return val;
}

indentityTwo(1);

interface Bottle{
    brand:string;
    type:string;
}

indentityTwo<Bottle>({brand:'a',type:'b'});  //giving it a custom interface

