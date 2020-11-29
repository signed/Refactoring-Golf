import { Product } from './product';

export class OrderItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number
    ) {
    }
}
