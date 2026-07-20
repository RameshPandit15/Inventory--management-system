/*
The starting point of your application.

init();

renderProducts();

renderStatistics();

attachEvents();

Think of it as the main controller. 
*/
/** 
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

*/

