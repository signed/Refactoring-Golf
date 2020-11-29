import { Customer } from './customer';
import { OrderItem } from './order-item';
import { Salesman } from './salesman';

export class Order {
    public readonly items: Set<OrderItem> = new Set<OrderItem>();

    constructor(
        public readonly customer: Customer,
        public readonly salesman: Salesman,
        public readonly deliveryStreet: string,
        public readonly deliveryCity: string,
        public readonly deliveryCountry: string | undefined,
        public readonly orderedOn: Date) {
    }

    public total(): number {
        const totalItems = this.totalItems();
        const tax = this.tax(totalItems);
        const shipping = this.shipping();

        return totalItems + tax + shipping;
    }

    private shipping() {
        let shipping = 15;
        if (this.deliveryCountry == 'USA') {
            shipping = 0;
        }
        return shipping;
    }

    private tax(totalItems: number) {
        return totalItems * 5 / 100;
    }

    private totalItems() {
        let totalAmount = 0;
        for (const item of this.items) {
            totalAmount += item.totalItem();
        }
        return totalAmount;
    }
}
