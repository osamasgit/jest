const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./productAdmin');

beforeEach(() => {
    resetProducts();
});

describe('create new product', () => {
    it('should throw an error if name or price is not provided', () => {
        expect(() => addProduct()).toThrow('Name and price are required');
    });
    it('should throw an error if product already exists', () => {
        addProduct('product1', '100');
        expect(() => addProduct('product1', '200')).toThrow('Product already exists');
    })
    it('should create a new product', () => {
        expect(addProduct('product1', '100')).toEqual({
            id: 1,
            name: 'product1',
            price: '100'
        });
    })
})

describe('remove product', () => {
    it('should throw an error if product not found', () => {
        expect(() => removeProduct(1)).toThrow('Product not found');
    });
    it('should remove a product', () => {
        addProduct('product1', '100');
        addProduct('product2', '200');
        console.log(getProducts());
        removeProduct(1);
        expect(getProducts()).toEqual([
            {
                id: 2,
                name: 'product2',
                price: '200'
            }
        ]);
    })
})

describe('get product', () => {
    it('should throw an error if product not found', () => {
        expect(() => getProduct(1)).toThrow('Product not found');
    });
    it('should return a product', () => {
        addProduct('product1', '100');
        expect(getProduct(1)).toEqual({
            id: 1,
            name: 'product1',
            price: '100'
        });
    })
})

describe('update product', () => {
    it('should throw an error if product not found', () => {
        expect(() => updateProduct(1)).toThrow('Product not found');
    });
    it('should throw an error if name or price is not provided', () => {
        expect(() => addProduct()).toThrow('Name and price are required');
    });
    it('should update a product', () => {
        addProduct('product1', '100');
        const updatedProduct = updateProduct(1, 'product2', '200');
        expect(updatedProduct).toEqual({
            id: 1,
            name: 'product2',
            price: '200'
        });
    })
})