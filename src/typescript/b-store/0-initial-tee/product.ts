import { ImageInfo } from './image-info';
import { ProductCategory } from './product-category';

export class Product {
    /* The Name */
    private _name: string;

    /* The UnitPrice */
    private _unitPrice: number;

    /* The Category */
    private _category: ProductCategory;

    /* The Image */
    private _image: ImageInfo | undefined;

    /* The Category */
    public unitsInStock: number = 0;

    public constructor(name: string, unitPrice: number, category: ProductCategory, image: ImageInfo | undefined) {
        this._name = name;
        this._unitPrice = unitPrice;
        this._category = category;
        this._image = image;
    }

    get image(): ImageInfo | undefined {
        return this._image;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }

    get name(): string {
        return this._name;
    }

    get category(): ProductCategory {
        return this._category;
    }

    public toXml() {
        return '<product>' + '<name>' + this.name + '</name>' + '<category>'
            + this.category + '</category>' + '</product>';
    }
}
