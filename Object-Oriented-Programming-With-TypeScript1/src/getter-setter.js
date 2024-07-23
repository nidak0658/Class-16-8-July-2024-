var A = /** @class */ (function () {
    function A(num) {
        this._cnic = num;
    }
    Object.defineProperty(A.prototype, "cnic", {
        get: function () {
            return this._cnic;
        },
        set: function (n) {
            this._cnic = n;
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
var a = new A(421016785900007);
// Access private property value using getter
console.log('old', a.cnic);
// Modify private property value using setter
a.cnic = 444999222;
console.log('new', a.cnic);
