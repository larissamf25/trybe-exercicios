"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evaluation = /** @class */ (function () {
    function Evaluation(teacher, _score) {
        this._score = _score;
        this._teacher = teacher;
        this.score = _score;
    }
    Object.defineProperty(Evaluation.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        set: function (value) {
            this._teacher = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Evaluation.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('A pontução deve ser positiva.');
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    return Evaluation;
}());
exports.default = Evaluation;
