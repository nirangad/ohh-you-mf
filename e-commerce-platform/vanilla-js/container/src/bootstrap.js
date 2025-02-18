import("products/ProductsIndex")
  .then((ProductsIndex) => {
    console.log("Product Index Loaded:", ProductsIndex);
  })
  .catch((error) => console.error("Error loading ProductsIndex:", error));

console.log("HOST LOADED: In bootstrap.js");
