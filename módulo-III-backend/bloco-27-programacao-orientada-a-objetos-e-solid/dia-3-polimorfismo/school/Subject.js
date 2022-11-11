"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.name = name;
        this.name = name;
    }
    Subject.prototype.getName = function () {
        return this.name;
    };
    Subject.prototype.setName = function (newName) {
        if (newName.length >= 3)
            this.name = newName;
        else
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    };
    return Subject;
}());
exports.default = Subject;
