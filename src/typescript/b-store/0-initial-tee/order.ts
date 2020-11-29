import { Customer } from './customer';
import { OrderItem } from './order-item';
import { ProductCategory } from './product-category';
import { Salesman } from './salesman';

export class Order {
    private _customer: Customer;
    private _salesman: Salesman;
    private _orderedOn: Date;
    private _deliveryStreet: string;
    private _deliveryCity: string;
    private _deliveryCountry: string | undefined;
    private _items: Set<OrderItem>;

    constructor(customer: Customer, salesman: Salesman, deliveryStreet: string, deliveryCity: string, deliveryCountry: string | undefined, orderedOn: Date) {
        this._customer = customer;
        this._salesman = salesman;
        this._deliveryStreet = deliveryStreet;
        this._deliveryCity = deliveryCity;
        this._deliveryCountry = deliveryCountry;
        this._orderedOn = orderedOn;
        this._items = new Set<OrderItem>();
    }

    get deliveryCountry(): string | undefined {
        return this._deliveryCountry;
    }

    get deliveryCity(): string {
        return this._deliveryCity;
    }

    get salesman(): Salesman {
        return this._salesman;
    }

    get customer(): Customer {
        return this._customer;
    }

    get items(): Set<OrderItem> {
        return this._items;
    }

    public total(): number {
        let totalItems = 0;

        for (const item of this._items) {
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
            totalItems += totalItem;
        }

        if (this.deliveryCountry == 'USA') {
            // total=totalItems + tax + 0 shipping
            return totalItems + totalItems * 5 / 100;
        }

        // total=totalItemst + tax + 15 shipping
        return totalItems + totalItems * 5 / 100 + 15;

    }
}
