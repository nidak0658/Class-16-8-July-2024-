var Car = /** @class */ (function () {
    function Car(t, d, c, tn) {
        this.tyre = t;
        this.door = d;
        this.color = c;
        this.trackerNumber = tn;
    }
    Car.prototype.carDetails = function () {
        console.log("This car is very awesome its color is ".concat(this.color, " its have ").concat(this.door, " doorscl"));
    };
    Car.prototype.trackerNumberLen = function () {
        return this.trackerNumber.length;
    };
    return Car;
}());
// New instant of car class
var boss = new Car(4, 4, 'grey', '37236713726');
// Update public property
boss.color = 'red';
// Access public method
boss.carDetails();
// Access private property using public method
console.log(boss.trackerNumberLen());
// console.log(boss);
// New instant of car class
var bmw = new Car(4, 2, 'white', '979986698');
// Update public property
bmw.color = "black";
// Access public method
bmw.carDetails();
// Access private property using public method
console.log(bmw.trackerNumberLen());
// console.log(bmw);
