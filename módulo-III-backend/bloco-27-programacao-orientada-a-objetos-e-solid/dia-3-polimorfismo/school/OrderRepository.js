"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderRepository = /** @class */ (function () {
    function OrderRepository() {
        this._orders = [];
    }
    OrderRepository.prototype.addOrder = function (value) {
        this._orders.push(value);
    };
    OrderRepository.prototype.removeOrder = function (value) {
        var index = 0;
        for (var i = 0; i < this._orders.length; i += 1) {
            if (this._orders[i] === value)
                index = i;
        }
        // const index = this._orders.findIndex((order) => order.id === value.id);
        this._orders.splice(index, 1);
    };
    OrderRepository.prototype.listByClient = function (value) {
        return this._orders.filter(function (order) { return order.client === value; });
    };
    OrderRepository.prototype.listBySortedValue = function (sort) {
        if (sort !== 'maior' && sort !== 'menor')
            throw new Error('Valor de ordenação inválido.');
        if (sort === 'menor') {
            return this._orders.sort(function (orderA, orderB) {
                if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount())
                    return 1;
                if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount())
                    return -1;
                return 0;
            });
        }
        return this._orders.sort(function (orderA, orderB) {
            if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount())
                return -1;
            if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount())
                return 1;
            return 0;
        });
    };
    return OrderRepository;
}());
exports.default = OrderRepository;
