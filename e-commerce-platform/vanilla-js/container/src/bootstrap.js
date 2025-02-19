import("products/ProductsIndex")
  .then(({ render: renderProductsIndex }) => {
    renderProductsIndex(document.getElementById("product-list-mfe"));
  })
  .catch((error) => console.error("Error loading ProductsIndex:", error));

import("cart/CartShow")
  .then(({render: renderCartShow}) => {
    renderCartShow(document.getElementById("shopping-cart-mfe"));
  })
  .catch((error) => console.error("Error loading ProductsIndex:", error));

console.warn("[Container application]", process.env.NODE_ENV);
