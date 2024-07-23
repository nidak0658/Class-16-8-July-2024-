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
var Person = /** @class */ (function () {
    function Person(x, y) {
        this.name = x;
        this.age = y;
    }
    Person.prototype.eat = function () {
        console.log("What's for dinner?");
    };
    Person.prototype.speak = function () {
        console.log("My name is ".concat(this.name, ", I am ").concat(this.age, " years old"));
    };
    return Person;
}());
// Chef class is inheriting from Person class 
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(name, age, occupation) {
        var _this = _super.call(this, name, age) || this;
        _this.occupation = occupation;
        return _this;
    }
    Chef.prototype.speak = function () {
        console.log("I am a ".concat(this.occupation));
    };
    Chef.prototype.cook = function () {
        console.log("I am cooking");
    };
    return Chef;
}(Person));
var chef = new Chef('saad', 24, 'pakistani food');
chef.speak();
