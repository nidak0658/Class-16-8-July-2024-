class Person {

    public name: string;
    public age: number;

    constructor(x: string, y: number) {
        this.name = x;
        this.age = y;
    }

    eat() {
        console.log(`What's for dinner?`);
    }

    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
}


// Chef class is inheriting from Person class 
class Chef extends Person {

    public occupation: string;

    constructor(name: string, age: number, occupation: string) {

        super(name, age);

        this.occupation = occupation;
    }

    speak(): void {
        console.log(`I am a ${this.occupation}`);
    }

    cook() {
        console.log(`I am cooking`);
    }
}

const chef = new Chef('saad',24,'pakistani food');
chef.speak();