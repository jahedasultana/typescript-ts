var users = [];
var user1 = {
    id: 1,
    name: "sathi",
    age: 25
};
var user2 = {
    id: 2,
    name: "sumu",
    age: 25
};
users.push(user1);
users.push(user2);
console.log(users);
var userInfo = function (user) {
    console.log("id ".concat(user.id, ", name ").concat(user.name, ", age ").concat(user.age));
};
users.forEach(function (user) { return userInfo(user); });
