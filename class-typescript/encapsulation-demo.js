//  public, private, protected, readonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName ".concat(this.userName, " age ").concat(this.age));
    };
    ;
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(userName, age, subjectPPPP) {
        var _this = _super.call(this, userName, age) || this;
        _this.subject = subjectPPPP;
        return _this;
    }
    Teacher.prototype.display = function () {
        console.log("userName ".concat(this.userName, " age ").concat(this.age, " and teacher ").concat(this.subject));
    };
    return Teacher;
}(User));
var teacherData1 = new Teacher("ss", 12, "bangla");
// teacherData1.display();
var user1 = new User('sathi', 25);
user1.userName = 'pinky';
user1.display();
