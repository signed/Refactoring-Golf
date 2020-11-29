import { Customer } from './customer';
import { OrderItem } from './order-item';
import { ProductCategory } from './product-category';
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
        let totalItems = 0;
        for (const item of this.items) {
            totalItems += this.totalItem(item);
        }
        return totalItems;
    }

    private totalItem(item: OrderItem) {
        let totalItem = 0;
        const itemAmount = item.product.unitPrice * item.quantity;
        if (item.product.category == ProductCategory.Accessories) {
            let booksDiscount = 0;
            if (itemAmount >= 100) {
                booksDiscount = itemAmount * 10 / 100;
            }
            totalItem = itemAmount - booksDiscount;
        }
        if (item.product.category == ProductCategory.Bikes) {
            // 20% discount for Bikes
            totalItem = itemAmount - itemAmount * 20 / 100;
        }
        if (item.product.category == ProductCategory.Cloathing) {
            let cloathingDiscount = 0;
            if (item.quantity > 2) {
                cloathingDiscount = item.product.unitPrice;
            }
            totalItem = itemAmount - cloathingDiscount;
        }
        return totalItem;
    }
}