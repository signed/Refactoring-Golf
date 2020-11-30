import { OrderItem } from './order-item';

export interface CategoryDiscount {
    calculateDiscount(orderItem: OrderItem): number;
}
