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
var A = /** @class */ (function () {
    function A(name, age, salary, atmPin) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.atmPin = atmPin;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age) {
        // Invoke parent class constructor using super
        var _this = _super.call(this, name, age, '120000', 9999) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    B.prototype.showSalary = function () {
        console.log(this.salary);
        // this.atmPin error: reason atmPin is private
    };
    return B;
}(A));
var b = new B('jawad bhai', 24);
b.showSalary();
