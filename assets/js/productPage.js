function renderProducts() {
  productTableBody.innerHTML = "";
  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>Rs.${product.price.toLocaleString("en-NP")}</td>
      <td>${product.stock}</td>
      <td>
        <span class="status-badge ${product.status === "In Stock" ? "in-stock" : "low-stock"}">
         ${product.status}
        </span>
      </td>
      <td>
        <button type="button" class="button" onclick="updateProduct(${product.id})">
          <img src="../assets/Icons/pencil.png" alt="pencil-icon">
        </button>
        <button type="button" class="button" onclick="deleteProduct(${product.id})">
          <img src="../assets/Icons/delete.png" alt="delete-icon">
        </button>
      </td>
    `;

    productTableBody.appendChild(row);
  });
};
renderProducts();

const form = document.getElementById("form");
const newForm = document.getElementById("newForm");
const cancelbTN = document.getElementById("cancel");
const saveBtn = document.getElementById("saveProduct");
const productName = document.getElementById("text");
const productCategory =document.getElementById("category");
const productPrice = document.getElementById("price");
const productQuantity = document.getElementById("stock");
const productSupplier = document.getElementById("supplier");
const productImage = document.getElementById("upload");
const productStock = document.getElementById("stock");
form.addEventListener("click", () => {
  newForm.showModal();
});

cancelbTN.addEventListener("click", (event) => {
  event.preventDefault();
newForm.close();
});

saveBtn.addEventListener("click", saveProduct);

function saveProduct()
{
  let userData = {};
  const addNewProduct = userData.find((product) => product.id === id && product.name === productName);
  if(addNewProduct)
  {
    return addNewProduct.stock += productStock;
  }
  if(addNewProduct.name === 0)
  {
    alert( "product name is required");
  }
  if(addNewProduct.price < 0)
  {
    alert("Price can't be negative!");
  }
  if(addNewProduct.stock < 0 )
  {
    alert( "Stock can't be negative!");
  }
  

  const newProduct = {
    id: addNewProduct.length + 1,
    name: addNewProduct.productName,
    category: addNewProduct.productCategory,
    price: addNewProduct.productPrice,
    stock: addNewProduct.productStock,
    supplier: addNewProduct.productSupplier,

  }
  products.push(newProduct);
  return newProduct;
  
}
