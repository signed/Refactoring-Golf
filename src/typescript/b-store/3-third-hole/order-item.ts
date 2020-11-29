import { Product } from './product';
import { ProductCategory } from './product-category';

export class OrderItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number
    ) {
    }
    totalItem() {
        let totalItem = 0;
        const itemAmount = this.product.unitPrice * this.quantity;
        if (this.product.category == ProductCategory.Accessories) {
            let booksDiscount = 0;
            if (itemAmount >= 100) {
                booksDiscount = itemAmount * 10 / 100;
            }
            totalItem = itemAmount - booksDiscount;
        }
        if (this.product.category == ProductCategory.Bikes) {
            // 20% discount for Bikes
            totalItem = itemAmount - itemAmount * 20 / 100;
        }
        if (this.product.category == ProductCategory.Cloathing) {
            let cloathingDiscount = 0;
            if (this.quantity > 2) {
                cloathingDiscount = this.product.unitPrice;
            }
            totalItem = itemAmount - cloathingDiscount;
        }
        return totalItem;
    }
}
