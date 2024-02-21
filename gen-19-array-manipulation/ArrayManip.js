//Array Product
let products = [
  { id: 1, type: "Shirts", total: 20 },
  { id: 2, type: "Jackets", total: 11 },
  { id: 3, type: "Pants", total: 8 },
  { id: 4, type: "Perfumes", total: 4 },
  { id: 5, type: "Glasses", total: 2 },
];

//fungsi CRUD
function showProduct() {
  console.log("\nList of Product: ");
  console.log(products);
}

function addProduct(id, type, total) {
  products.push({ id: id, type: type, total: total });
  console.log("New products added");
}

function delProduct(id) {
  products = products.filter((product) => product.id !== id);
  console.log("Product deleted");
}

function editProduct(id, newType, newTotal) {
  products.forEach((product) => {
    if (product.id === id) {
      product.type = newType;
      product.total = newTotal;
    }
  });
  console.log("Product edited");
}

showProduct();

// addProduct(6, "Hat", 3);
// editProduct(3, "Shoes", 5);
delProduct(5);

showProduct();
