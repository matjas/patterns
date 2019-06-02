import Singleton1 from "./singleton1.js";
import Singleton2 from "./singleton2.js";
import Singleton3 from "./Singleton3.js";

var oSingleton1 = new Singleton1();
var oSingleton2 = new Singleton1();
console.log(Singleton1.toString());
console.log(oSingleton1);
console.log(oSingleton2);
console.log("Are oSingleton1 and oSingleton2 the same instance? " + (oSingleton1 === oSingleton2));

var oSingleton2_1 = Singleton2;
var oSingleton2_2 = Singleton2;
console.log(Singleton2.toString());
console.log(oSingleton2_1);
console.log(oSingleton2_2);
console.log("Are oSingleton2_1 and oSingleton2_2 the same instance? " + (oSingleton2_1 === oSingleton2_2));

var oSingleton3_1 = new Singleton3();
var oSingleton3_2 = new Singleton3();
console.log(Singleton3.toString());
console.log(oSingleton3_1);
console.log(oSingleton3_2);
console.log("Are oSingleton3_1 and oSingleton3_2 the same instance? " + (oSingleton3_1 === oSingleton3_2));