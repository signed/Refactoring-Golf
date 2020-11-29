import { Product } from './product';
import { ProductCategory } from './product-category';

export class OrderItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number
    ) {
    }
    total() {
        let discount: number = 0;
        if (this.product.category == ProductCategory.Accessories) {
            discount = this.calculateAccessoriesDiscount();
        }
        if (this.product.category == ProductCategory.Bikes) {
            // 20% discount for Bikes
            discount = this.calculateBikeDiscount();
        }
        if (this.product.category == ProductCategory.Cloathing) {
            discount = this.calculateCloathingDiscount();
        }
        return this.itemAmount() - discount;
    }

    private calculateAccessoriesDiscount() {
        let booksDiscount = 0;
        if (this.itemAmount() >= 100) {
            booksDiscount = this.itemAmount() * 10 / 100;
        }
        return booksDiscount;
    }

    private calculateBikeDiscount() {
        return this.itemAmount() * 20 / 100;
    }

    private calculateCloathingDiscount() {
        let cloathingDiscount = 0;
        if (this.quantity > 2) {
            cloathingDiscount = this.product.unitPrice;
        }
        return cloathingDiscount;
    }

    private itemAmount() {
        return this.product.unitPrice * this.quantity;
    }
}
