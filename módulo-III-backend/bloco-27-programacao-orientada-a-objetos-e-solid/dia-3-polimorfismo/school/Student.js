"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = String();
        _this.enrollment = _this.generateEnrollment();
        _this._evaluationsResults = [];
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16) {
                throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
            }
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "evaluationsResults", {
        get: function () {
            return this._evaluationsResults;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        return __spreadArray([], this._evaluationsResults, true).reduce(function (previousNote, note) { return note.score + previousNote; }, 0);
    };
    Student.prototype.sumAverageGrade = function () {
        var sumGrades = this.sumGrades();
        var divider = this._evaluationsResults.length;
        return Math.round(sumGrades / divider);
    };
    Student.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(randomStr);
    };
    Student.prototype.addEvaluationResult = function (value) {
        this._evaluationsResults.push(value);
    };
    return Student;
}(Person_1.default));
exports.default = Student;
