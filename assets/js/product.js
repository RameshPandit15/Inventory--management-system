/*  
Contains all product-related business logic.

addProduct()

deleteProduct()

editproducts()

updateProduct()

findProduct()

getProductById()
 */

const products = [];
const productTableBody = document.getElementById("productTableBody");

function addProduct(id, name, category, price, stock) {
  const existingProduct = products.find((item) => item.id === id && item.name === name);
  if (existingProduct) {
    existingProduct.stock += stock;
    existingProduct.status = existingProduct.stock <= 10 ? "Low Stock" : "In Stock";
    return existingProduct;
  }
  if (!id || !name || !category) {
    throw new Error("Missing required fields");
  }

  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (stock < 0) {
    throw new Error("Stock cannot be negative");
  }
  

  const newProduct = {
    id,
    name,
    category,
    price,
    stock,
    status: stock<= 10 ? "Low Stock" : "In Stock",
  
  }

  products.push(newProduct);
  return newProduct;
};
addProduct(1, "Acer Nitro V15", "Electronics", 165000, 20);
addProduct(1, "Acer Nitro V15", "Electronics", 165000, 20);
addProduct(2, "Logitech Mouse", "Accessories", 2500, 5);
addProduct(3, "Keyboard", "Accessories", 4500, 15);
addProduct(4, "Bag", "Accessories", 1000, 50);
addProduct(5, "Water Bottle", "House & Kitchen", 800, 100);
addProduct(6, "Monitor", "Electronics", 65000, 15);
addProduct(7, "Freez", "Electronics", 15000, 25);
addProduct(8, "Micro wave", "Home & Kitche", 10000, 10);
addProduct(9, "Induction", "Home & Kitchen", 12000, 40);
addProduct(10, "Frying pan", "House & Kitchen", 1500, 30);


function deleteProduct(id)
{
  const index = products.findIndex(product => product.id === id);
  if(index === -1)
  {
    return "Index not found!";
  }
  
  if(confirm("Are you sure to delete this ptoduct?"))
  {
    products.splice(index, 1);
    deleteProduct(id);
    renderProducts();
  }

};


function editProducts(id, newPrice, newStock)
{
  const product = products.find((product) => product.id === id);
  if(!product)
  {
    return "Product not found";
  }
  
    product.price = newPrice,
    product.stock = newStock

    product.ststus = product.stock < 10 ? "Low Stock" : "In Stock";
    renderProducts();
};
 editProducts(id, newPrice, newStock);


