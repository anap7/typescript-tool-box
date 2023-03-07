import Customer from './entity/customer';
import Address from './entity/address';
import OrderItem from './entity/order_item';
import Order from './entity/order';

//Customer aggregate - Relação de Id
let customer = new Customer("29038", "Vinícius");
const address = new Address("Rua dois", 12, "08345-135", "São Paulo");
//Associand o endereço ao cliente
customer.Address = address;
customer.activate;

//Order Aggregate - Relação do cliente e pedido é através do ID e pedido e itens através de um objeto (associando os itens ao pedido)
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);
const order = new Order("392308", "29038", [item1, item2]);