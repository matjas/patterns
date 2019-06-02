function Singleton1(){

    if (Singleton1._instance)
        return Singleton1._instance;

    Singleton1._instance = this;

    this.toString = function() {
        return "[object Singleton]"
    }
}(new Singleton1);

export default Singleton1;