var UserData = /** @class */ (function () {
    function UserData(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    UserData.prototype.showUserName = function () {
        console.log("userName ".concat(this.userName, " age ").concat(this.age));
    };
    return UserData;
}());
var user2 = new UserData('sathi', 25);
user2.showUserName();
var sathi = new UserData('Zahid', 24);
sathi.showUserName();
sathi.age;
