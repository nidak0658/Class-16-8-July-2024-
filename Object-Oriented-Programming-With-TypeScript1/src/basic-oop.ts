class Car {

    public tyre: number;
    public door: number;
    public color: string;
    private trackerNumber: string; // Only accessible in class

    constructor(t: number, d: number, c: string, tn: string) {
        this.tyre = t;
        this.door = d;
        this.color = c;
        this.trackerNumber = tn;
    }

    carDetails() {
        console.log(`This car is very awesome its color is ${this.color} its have ${this.door} doorscl`);
    }

    trackerNumberLen() {

        return this.trackerNumber.length;
    }

}



// New instant of car class
const boss = new Car(4, 4, 'grey','37236713726');

// Update public property
boss.color = 'red'

// Access public method
boss.carDetails();

// Access private property using public method
console.log(boss.trackerNumberLen());
// console.log(boss);



// New instant of car class
const bmw = new Car(4, 2, 'white','979986698');

// Update public property
bmw.color = "black"

// Access public method
bmw.carDetails();

// Access private property using public method
console.log(bmw.trackerNumberLen());

// console.log(bmw);