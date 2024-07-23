abstract class Base {

    abstract getFoodName(): string

    public ServeFood() {
        console.log('Here is your' + ' ' + this.getFoodName());
    }
}

class Main extends Base {

    getFoodName(): string {
        return 'Anda chana'
    }

}

const m = new Main();
m.ServeFood();