"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderItem = /** @class */ (function () {
    function OrderItem(_name, _price) {
        this._name = _name;
        this._price = _price;
        this.name = _name;
        this.price = _price;
    }
    Object.defineProperty(OrderItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('O preço deve ser positivo.');
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return OrderItem;
}());
exports.default = OrderItem;
