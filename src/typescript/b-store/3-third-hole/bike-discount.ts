import { CategoryDiscount } from './category-discount';
import { OrderItem } from './order-item';

export class BikesDiscount implements CategoryDiscount {
    calculateDiscount(orderItem: OrderItem) {
        return orderItem.itemAmount() * 20 / 100;
    }
}
