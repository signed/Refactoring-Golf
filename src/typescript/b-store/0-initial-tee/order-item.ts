import { Product } from './product';

export class OrderItem {
    constructor(
        private _product: Product,
        private _quantity: number
    ) {
    }

    get product(): Product {
        return this._product;
    }


    get quantity(): number {
        return this._quantity;
    }

}
