class A {

    private _cnic:number;

    constructor(num: number) { 
        this._cnic = num;
    }

    get cnic() {
        return this._cnic;
    }

    set cnic(n:number) {
        this._cnic = n;
    }
}

const a = new A(421016785900007);

// Access private property value using getter
console.log('old',a.cnic);

// Modify private property value using setter
a.cnic = 444999222;

console.log('new',a.cnic);