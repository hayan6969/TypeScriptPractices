//we will discuss the interface vs type in typescript
var hayan = {
    email: "dcaca",
    userId: 1,
    name: "Hayan"
};
var admin = {
    email: "dcaca",
    userId: 1,
    name: "Hayan",
    adminId: 1
};
//private class members in typescript
var User1 = /** @class */ (function () {
    function User1(email, userId) {
        this.email = email;
        this.userId = userId;
    }
    return User1;
}());
var user1 = new User1("dcaca", 1);
// console.log(user1.email) //this will give an error because email is private
