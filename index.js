const ProductManager = require("./ProductManager");
const Product = require("./Product");


const productManager = new ProductManager();

let respuesta = productManager.getProducts();

console.log(respuesta)

const product1 = new Product('Escuadra', 'Escuadra de 30cm', 123.45, 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png', '123456', 10);

const product2 = new Product('Calculadora', 'Calculadora cientifica', 234.56, 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png', '123456', 10);

productManager.addProduct(product1);

let respuesta2 = productManager.getProducts();

console.log(respuesta2)


let respuesta3 = productManager.addProduct(product1);
console.log(respuesta3)

let respuesta4 = productManager.getProductById(132);
console.log(respuesta4)

productManager.addProduct(product2);

let respuesta5 = productManager.getProducts();

console.log(respuesta5)