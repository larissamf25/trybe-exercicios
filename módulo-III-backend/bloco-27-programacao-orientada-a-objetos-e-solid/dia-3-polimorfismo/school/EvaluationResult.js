"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvaluationResult = /** @class */ (function () {
    function EvaluationResult(evaluation, _score) {
        this._score = _score;
        this._evaluation = evaluation;
        this.score = _score;
    }
    Object.defineProperty(EvaluationResult.prototype, "evaluation", {
        get: function () {
            return this._evaluation;
        },
        set: function (value) {
            this._evaluation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EvaluationResult.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('A pontução deve ser positiva.');
            this.validateValueThreshold(value, 'prova', 25);
            this.validateValueThreshold(value, 'trabalho', 50);
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    EvaluationResult.prototype.validateValueThreshold = function (value, type, threshold) {
        if (this.type === type && value > threshold) {
            throw new Error("A pontu\u00E7\u00E3o deve ser menor que ".concat(threshold, " pontos."));
        }
    };
    return EvaluationResult;
}());
exports.default = EvaluationResult;
