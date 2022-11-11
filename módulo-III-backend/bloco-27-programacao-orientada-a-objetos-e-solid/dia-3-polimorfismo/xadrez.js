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
var boardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var boardRows = ['1', '2', '3', '4', '5', '6', '7', '8'];
var isInList = function (element, list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var e = list_1[_i];
        if (element[0] == e[0] && element[1] == e[1])
            return true;
    }
    return false;
};
var Piece = /** @class */ (function () {
    function Piece(position, board) {
        this.board = board;
        this._position = position;
    }
    ;
    Piece.prototype.getPosition = function () { return this._position; };
    Piece.prototype.move = function (newPosition) {
        console.log("MOVENDO ".concat(this.type, " DA CASA ").concat(this._position, " PARA A CASA ").concat(newPosition));
        if (!isInList(newPosition, this.getAvailableMoves()))
            return false;
        this._position = newPosition;
        return true;
    };
    return Piece;
}());
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Peão';
        return _this;
    }
    Pawn.prototype.getAvailableMoves = function () {
        var column = this.getPosition[0];
        var row = this.getPosition[1];
        var rowIndex = boardRows.indexOf(row);
        if (rowIndex === 7)
            return [];
        var nextSquare = [column, boardRows[rowIndex + 1]];
        if (isInList(nextSquare, this.board.getOccupiedSquares()))
            return [];
        return [nextSquare];
    };
    return Pawn;
}(Piece));
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "Torre";
        return _this;
    }
    Rook.prototype.getAvailableMoves = function () {
        var column = this.getPosition[0];
        var columnIndex = boardColumns.indexOf(column);
        var row = this.getPosition[1];
        var rowIndex = boardRows.indexOf(row);
        var availableSquares = [];
        // Adiciona todas as casas abaixo
        for (var i = rowIndex - 1; i >= 0; i--) {
            var square = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(square, this.board.getOccupiedSquares()))
                break;
            availableSquares.push(square);
        }
        // Adiciona todas as casas acima
        for (var i = rowIndex + 1; i < 8; i++) {
            var square = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(square, this.board.getOccupiedSquares()))
                break;
            if (isInList(square, availableSquares))
                continue;
            availableSquares.push(square);
        }
        // Adiciona todas as casas na direita
        for (var i = columnIndex + 1; i < 8; i++) {
            var square = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(square, this.board.getOccupiedSquares()))
                break;
            if (isInList(square, availableSquares))
                continue;
            availableSquares.push(square);
        }
        // Adiciona todas as casas na esquerda
        for (var i = columnIndex - 1; i >= 0; i--) {
            var square = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(square, this.board.getOccupiedSquares()))
                break;
            if (isInList(square, availableSquares))
                continue;
            availableSquares.push(square);
        }
        return availableSquares;
    };
    return Rook;
}(Piece));
var Board = /** @class */ (function () {
    function Board() {
        this.pieces = [];
        this.addPiece(new Pawn(['C', '2'], this));
        this.addPiece(new Rook(['F', '1'], this));
    }
    Board.prototype.addPiece = function (piece) {
        if (isInList(piece.getPosition, this.getOccupiedSquares()))
            return;
        this.pieces.push(piece);
    };
    Board.prototype.getOccupiedSquares = function () {
        return this.pieces.map(function (piece) { return piece.getPosition(); });
    };
    return Board;
}());
var piece;
var board = new Board();
console.log(board);
var logPieceInfo = function (piece) {
    console.log("----------------------\nPe\u00E7a: ".concat(piece.type, "\nPosi\u00E7\u00E3o: ").concat(piece.getPosition, "\nMovimentos dispon\u00EDveis: ").concat(piece.getAvailableMoves().map(function (b) { return "[" + b + "]"; }), "\nPosi\u00E7\u00F5es ocupadas no tabuleiro: ").concat(board.getOccupiedSquares()));
};
piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);
piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);
piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);
