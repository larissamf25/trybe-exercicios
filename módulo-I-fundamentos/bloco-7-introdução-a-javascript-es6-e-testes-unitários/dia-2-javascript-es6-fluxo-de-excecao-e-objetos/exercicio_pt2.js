const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let customer = Object.entries(order);
  let request = customer[3][1];
  let delivery = Object.entries(request.delivery);
  console.log(`Olá ${delivery[0][1]}, entrega para: ${customer[0][1]}, Telefone: ${customer[1][1]}, R. ${Object.entries(customer[2][1])[0][1]}, Nº: ${Object.entries(customer[2][1])[1][1]}, AP: ${Object.entries(customer[2][1])[2][1]}`);

}

customerInfo(order);

const orderModifier = (order) => {
  let newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    },
  }
  Object.assign(order,newOrder);
  let customer = Object.entries(order);
  let request = customer[3][1];
  let pizza = Object.entries(request.pizza);
  let drinks = Object.entries(request.drinks);
  let delivery = Object.entries(request.delivery);
  console.log(order);
  console.log(`Olá ${customer[0][1]}, o total do seu pedido de ${pizza[0][0]}, ${pizza[1][0]} e ${Object.entries(drinks[0][1])[0][1]} é de R$ ${Object.values(customer[4][1])},00`);
}

orderModifier(order);
