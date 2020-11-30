import { CategoryDiscount } from './category-discount';
import { OrderItem } from './order-item';

export class AccessoriesDiscount implements CategoryDiscount {
    calculateDiscount(orderItem: OrderItem) {
        let booksDiscount = 0;
        if (orderItem.itemAmount() >= 100) {
            booksDiscount = orderItem.itemAmount() * 10 / 100;
        }
        return booksDiscount;
    }
}
