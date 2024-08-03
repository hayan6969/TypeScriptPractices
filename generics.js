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
indentityTwo({ brand: 'a', type: 'b' });
