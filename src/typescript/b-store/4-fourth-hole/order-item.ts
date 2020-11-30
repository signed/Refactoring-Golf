import { AccessoriesDiscount } from './accessories-discount';
import { BikesDiscount } from './bike-discount';
import { CategoryDiscount } from './category-discount';
import { CloathingDiscount } from './cloathing-discount';
import { Product } from './product';
import { ProductCategory } from './product-category';

export class OrderItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number
    ) {
    }

    total() {
        return this.itemAmount() - this.createCategoryDiscount().calculateDiscount(this);
    }

    private createCategoryDiscount(): CategoryDiscount {
        if (this.product.category === ProductCategory.Accessories) {
            return new AccessoriesDiscount();
        }
        if (this.product.category === ProductCategory.Bikes) {
            return new BikesDiscount();
        }
        if (this.product.category === ProductCategory.Cloathing) {
            return new CloathingDiscount();
        }
        return this.product.category
    }


    itemAmount() {
        return this.product.unitPrice * this.quantity;
    }
}
