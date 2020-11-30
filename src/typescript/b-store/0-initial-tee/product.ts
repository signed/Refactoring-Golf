import { ImageInfo } from './image-info';
import { ProductCategory } from './product-category';

export class Product {
    public constructor(
        public readonly name: string,
        public readonly unitPrice: number,
        public readonly category: ProductCategory,
        public readonly image: ImageInfo | undefined
    ) {
    }

    public toXml() {
        return '<product>' + '<name>' + this.name + '</name>' + '<category>'
            + this.category + '</category>' + '</product>';
    }
}
