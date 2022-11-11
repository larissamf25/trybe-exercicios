class Client {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Product {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Order {
  id: number;
  cliente: Client;
  itens: number[];
  pagamento: 'dinheiro' | 'cartão' | 'vale';
  desconto: number;
  createdAt: Date;

  constructor(cliente: Client, itens: number[], pagamento: 'dinheiro' | 'cartão' | 'vale', desconto: number) {
    this.cliente = cliente;
    this.itens = itens;
    this.pagamento = pagamento;
    this.desconto = desconto;
  }

  setDesconto(newDesconto: number) {
    if(newDesconto >= 0) this.desconto = newDesconto;
    else throw new Error('O desconto não pode ser negativo');
  }

  total() {
    return this.itens.reduce((acc, item) => acc + item, 0);
  }

  totalComDesconto() {
    return this.total() * (1 - this.desconto);
  }
}

class OrderItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  setName(newName: string) {
    if(newName.length >= 3) this.name = newName;
    else throw new Error('Nome inválido');
  }

  setPrice(newPrice: number) {
    if(newPrice > 0) this.price = newPrice;
    else throw new Error('Preço inválido');
  }
}

class Orderrepository {
  orders: Order[];

  addOrder(newOrder: Order) {
    this.orders.push(newOrder);
  }

  removeOrder(order: Order) {
    this.orders = this.orders.filter((o) => o !== order);
  }

  listByClient(client: Client) {
    return this.orders.filter((order) => order.cliente === client);
  }

  listBySortedValue(sort: string) {
    if (sort === 'menor') return this.orders.sort((a,b) => a.totalComDesconto() - b.totalComDesconto());
    else return this.orders.sort((a,b) => b.totalComDesconto() - a.totalComDesconto());
  }
}

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (!Data.validateDate(dia, mes, ano)) {
      this.dia = 1;
      this.mes = 1;
      this.ano = 1990;
    } else {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  }

  private static validateDate(day: number, month: number, year: number)
    : boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }

  getMonthName() {
    switch(this.mes) {
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
  }

  isLeapYear() {
    return (this.ano % 4 === 0);
  }

  compare(newData: Data) {
    if (newData.dia === this.dia && newData.mes === this.mes && this.ano === newData.ano) return 0;
    if (this.ano > newData.ano || (this.ano === newData.ano && this.mes > newData.mes) || (newData.mes === this.mes && this.ano === newData.ano && this.dia > newData.dia)) return 1;
    return -1;
  }

  format(formato: string) {
    switch (formato) {
      case 'dd/mm/aaaa': return `${this.dia}/${this.mes}/${this.ano}`;
      case 'aaaa-mm-dd': return `${this.ano}/${this.mes}/${this.dia}`;
      case 'dd de M de aa': return `${this.dia} de ${this.getMonthName()} de ${this.ano}`;
      default: return `${this.dia}, ${this.getMonthName()} de ${this.ano}`;
    }
  }
}