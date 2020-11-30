import { CategoryDiscount } from './category-discount';
import { OrderItem } from './order-item';

export class CloathingDiscount implements CategoryDiscount {
    calculateDiscount(orderItem: OrderItem) {
        let cloathingDiscount = 0;
        if (orderItem.quantity > 2) {
            cloathingDiscount = orderItem.product.unitPrice;
        }
        return cloathingDiscount;
    }
}
