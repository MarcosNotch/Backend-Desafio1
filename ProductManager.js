

class ProductManager {

    constructor() {
        this.products = [];
        this.conntador = 0;
    }

    addProduct(producto) {
        let existe = this.products.find(product => product.id === producto.id);
        if (existe) {
            return 'El producto ya existe';   
        }
        if(producto.title === null || producto.description === null 
            || producto.price === null || producto.thumbnail === null || producto.code === null 
            || producto.stock === null) {
            return 'Faltan datos';
        }
        producto.id = ++this.conntador;
        this.products.push(producto);
        return 'Producto agregado';
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let producto = this.products.find(product => product.id === id);
        if (producto) {
            return producto;
        }
        return 'Producto no encontrado';
    }
}

module.exports = ProductManager;