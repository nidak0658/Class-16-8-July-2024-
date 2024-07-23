class A {
    constructor(public name: string, public age: number, protected salary: string, private atmPin: number) { }
}

class B extends A {

    constructor(public name: string, public age: number) {

        // Invoke parent class constructor using super
        super(name, age, '120000',9999);
    }

    showSalary() {

        console.log(this.salary);
        // this.atmPin error: reason atmPin is private

    }

}

const b = new B('jawad bhai', 24);
b.showSalary();