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
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeleeCharacter.prototype.talk = function () {
        console.log('Este é o Melee');
    };
    MeleeCharacter.prototype.specialMode = function () {
        console.log('Seu poder é de força');
    };
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRangeCharacter.prototype.talk = function () {
        console.log('Este é o LongRange');
    };
    LongRangeCharacter.prototype.specialMode = function () {
        console.log('Seu poder é de esticar');
    };
    return LongRangeCharacter;
}(Character));
var presentation = function (character) {
    character.talk();
    character.specialMode();
};
var char1 = new MeleeCharacter();
var char2 = new LongRangeCharacter();
presentation(char1);
presentation(char2);
/* Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.
Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem. */ 
