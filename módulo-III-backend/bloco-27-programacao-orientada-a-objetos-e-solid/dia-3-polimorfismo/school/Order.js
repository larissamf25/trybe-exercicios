"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(client, items, _paymentMethod, discount) {
        this._paymentMethod = _paymentMethod;
        this._items = [];
        this._discount = 0;
        this._id = Math.floor(Date.now() * (Math.random() + 1));
        this._createdAt = new Date();
        this._client = client;
        this.items = items;
        this.paymentMethod = _paymentMethod;
        if (discount)
            this.discount = discount;
    }
    Object.defineProperty(Order.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error('O pedido deve ter pelo meno um item.');
            }
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "paymentMethod", {
        get: function () {
            return this._paymentMethod;
        },
        set: function (value) {
            if (value !== 'dinheiro' && value !== 'cartão' && value !== 'vale') {
                throw new Error('A forma de pagamento não é válida.');
            }
            this._paymentMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('O desconto não pode ser um valor negativo.');
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.calculateTotal = function () {
        return this.items
            .reduce(function (previousValue, item) { return previousValue + item.price; }, 0);
    };
    Order.prototype.calculateTotalWithDiscount = function () {
        return this.calculateTotal() * (1 - this.discount);
    };
    return Order;
}());
exports.default = Order;
