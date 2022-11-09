var Student = /** @class */ (function () {
    function Student(matricula, nome, provas, trabalhos) {
        this.matricula = matricula;
        this.nome = nome;
        this.provas = provas;
        this.trabalhos = trabalhos;
    }
    Student.prototype.soma = function () {
        return this.provas.reduce(function (acc, nota) { return acc + nota; }, 0);
    };
    Student.prototype.media = function () {
        return this.soma() / 4;
    };
    return Student;
}());
var Client = /** @class */ (function () {
    function Client(nome) {
        this.nome = nome;
    }
    return Client;
}());
var Product = /** @class */ (function () {
    function Product(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Product;
}());
var Order = /** @class */ (function () {
    function Order(cliente, itens, pagamento, desconto) {
        this.cliente = cliente;
        this.itens = itens;
        this.pagamento = pagamento;
        this.desconto = desconto;
    }
    Order.prototype.total = function () {
        return this.itens.reduce(function (acc, item) { return acc + item; }, 0);
    };
    Order.prototype.totalComDesconto = function () {
        return this.total() * (1 - this.desconto);
    };
    return Order;
}());
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (!Data.validateDate(dia, mes, ano)) {
            this.dia = 1;
            this.mes = 1;
            this.ano = 1990;
        }
        else {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }
    Data.validateDate = function (day, month, year) {
        var dateStr = "".concat(year, "-").concat(month, "-").concat(day);
        if (new Date(dateStr).getDate() !== day)
            return false;
        return true;
    };
    Data.prototype.getMonthName = function () {
        switch (this.mes) {
            case 1: return 'Janeiro';
            case 2: return 'Fevereiro';
            case 3: return 'Março';
            case 4: return 'Abril';
            case 5: return 'Maio';
            case 6: return 'Junho';
            case 7: return 'Julho';
            case 8: return 'Agosto';
            case 9: return 'Setembro';
            case 10: return 'Outubro';
            case 11: return 'NOvembro';
            default: return 'Dezembro';
        }
    };
    Data.prototype.isLeapYear = function () {
        return (this.ano % 4 === 0);
    };
    Data.prototype.compare = function (newData) {
        if (newData.dia === this.dia && newData.mes === this.mes && this.ano === newData.ano)
            return 0;
        if (this.ano > newData.ano || (this.ano === newData.ano && this.mes > newData.mes) || (newData.mes === this.mes && this.ano === newData.ano && this.dia > newData.dia))
            return 1;
        return -1;
    };
    Data.prototype.format = function (formato) {
        switch (formato) {
            case 'dd/mm/aaaa': return "".concat(this.dia, "/").concat(this.mes, "/").concat(this.ano);
            case 'aaaa-mm-dd': return "".concat(this.ano, "/").concat(this.mes, "/").concat(this.dia);
            case 'dd de M de aa': return "".concat(this.dia, " de ").concat(this.getMonthName(), " de ").concat(this.ano);
            default: return "".concat(this.dia, ", ").concat(this.getMonthName(), " de ").concat(this.ano);
        }
    };
    return Data;
}());
