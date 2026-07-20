/*
Everything related to displaying data.

renderProducts()

renderProductRow()

renderStatistics()

renderEmptyState()

showNotification()
 */

function renderProducts() {
  productTableBody.innerHTML = "";
  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
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
        <button type="button" class="button" onclick="editProduct(${product.id})">
          <img src="./assets/Icons/pencil.png" alt="pencil-icon">
        </button>
        <button type="button" class="button" onclick="deleteProduct(${product.id})">
          <img src="./assets/Icons/delete.png" alt="delete-icon">
        </button>
      </td>
    `;

    productTableBody.appendChild(row);
  });
};

renderProducts();


