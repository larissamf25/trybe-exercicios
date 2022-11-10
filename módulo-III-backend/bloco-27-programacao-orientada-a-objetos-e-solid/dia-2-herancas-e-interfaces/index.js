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
var Superclass = /** @class */ (function () {
    function Superclass(valor) {
        if (valor === void 0) { valor = true; }
        this.isSuper = valor;
    }
    Superclass.prototype.sayHello = function () {
        console.log(this.isSuper ? 'Super!' : 'Sub!');
    };
    return Superclass;
}());
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super.call(this, false) || this;
    }
    Subclass.prototype.sayHello2 = function () {
        this.sayHello();
    };
    return Subclass;
}(Superclass));
function myFunc(object) {
    object.sayHello();
}
var mae = new Superclass();
var filha = new Subclass();
myFunc(mae);
myFunc(filha);
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        return "O resultado \u00E9 ".concat(myParam + this.myNumber);
    };
    return MyClass;
}());
var obj = new MyClass(23);
console.log(obj.myFunc(27));
