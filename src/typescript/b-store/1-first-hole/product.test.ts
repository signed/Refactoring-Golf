import { ImageInfo } from './image-info';
import { Product } from './product';
import { ProductCategory } from './product-category';

test('product image return the type', () => {
    const imageInfo = new ImageInfo('Bike01.jpg');

    const type = imageInfo.getImageType();

    expect(type).toEqual('jpg');
});

test('serialize to xml', () => {
    const product = createProduct();

    const xml = product.toXml();

    expect(xml).toEqual('<product><name>Black Bike</name><category>Bikes</category></product>');
});

const createProduct = () => {
    return new Product('Black Bike', 250, ProductCategory.Bikes, new ImageInfo('Bike01.jpg'));
};
