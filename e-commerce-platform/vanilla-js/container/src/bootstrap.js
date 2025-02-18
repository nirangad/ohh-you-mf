import("products/ProductsIndex")
  .then(({ render: renderProductsIndex }) => {
    renderProductsIndex();
  })
  .catch((error) => console.error("Error loading ProductsIndex:", error));

import("cart/CartShow")
  .then((CartShow) => {
    console.log("Cart Loaded:", CartShow);
  })
  .catch((error) => console.error("Error loading ProductsIndex:", error));

console.warn("[Container application]", process.env.NODE_ENV);
