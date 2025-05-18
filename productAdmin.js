let productsList = [];

function resetProducts() {
    productsList = [];
}

function getProducts() {
    return productsList;
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price are required');
    }
    const exist = productsList.find((product) => product.name === name);
    if (exist) {
        throw new Error('Product already exists');
    }
    const product = {
        id: productsList.length + 1,
        name,
        price
    }
    productsList.push(product);
    return product;
}

function getProduct(id) {
    const product = productsList.find((product) => product.id === id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

function removeProduct(id) {
    const index = productsList.findIndex(product => product.id === id);
        if (index === -1) {
        throw new Error('Product not found');
    }
    productsList.splice(index, 1);
} 

function updateProduct(id, name, price) {
    const product = getProduct(id);
    if (!product) {
        throw new Error('Product not found');
    }
    if (name) {
        product.name = name;
    }
    if (price) {
        product.price = price;
    }
    return product;

}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}