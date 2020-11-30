import { Customer } from './customer';
import { Order } from './order';
import { OrderItem } from './order-item';
import { Product } from './product';
import { ProductCategory } from './product-category';
import { Salesman } from './salesman';

test('hold many order items', () => {
    const order = createOrder();
    const orderItem = createOrderItem(10, ProductCategory.Accessories, 1);

    addItemToOrder(order, orderItem);

    expect(order.items.size).toEqual(1);
});

test('return the total with accessories discount', () => {
    const order = createOrder("USA");
    const orderItem = createOrderItem(50, ProductCategory.Accessories, 2);
    addItemToOrder(order, orderItem);

    const total = order.total();

    expect(total).toEqual(94.5);
});

test('return the total with bikes discount', () => {
    const order = createOrder("USA");
    const orderItem = createOrderItem(200, ProductCategory.Bikes, 2);
    addItemToOrder(order, orderItem);

    const total = order.total();

    expect(total).toEqual(336);
});

test('return the total with cloathing discount', () => {
    const order = createOrder("USA");
    const orderItem = createOrderItem(100, ProductCategory.Cloathing, 3);
    addItemToOrder(order, orderItem);

    const total = order.total();

    expect(total).toEqual(210);
});

test('return the total with shipping cost when delivery country is outside USA', () => {
    const order = createOrder("Peru");

    const total = order.total();

    expect(total).toEqual(15);
});

const createOrder = (deliveryCountry?: string) => {
    const customer = new Customer('Luis', 'Palacios', '54115678654');
    const salesman = new Salesman('Alberto', 'Martinez', 4000, 4);
    return new Order(customer, salesman, 'Los claveles 452', 'New York', deliveryCountry, new Date());
};

const createOrderItem = (unitPrice: number, productCategory: ProductCategory, quantity: number) => {
    const product = new Product('Nombre', unitPrice, productCategory, undefined);
    return new OrderItem(product, quantity);
};

const addItemToOrder = (order: Order, orderItem: OrderItem) => {
    order.items.add(orderItem);
};
