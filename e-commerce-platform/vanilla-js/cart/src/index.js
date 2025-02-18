import { faker } from '@faker-js/faker';

const cartItems = [
  {
    product: {
      name: "Milk (1 Liter)",
      price: 120,
      short_description: "Fresh cow's milk.",
      long_description:
        "Pasteurized, homogenized milk, perfect for drinking, cooking, or baking.",
      category: "Dairy",
      image_url: "https://example.com/milk.jpg",
    },
    qty: 3,
  },
  {
    product: {
      name: "Bread (500g)",
      price: 85,
      short_description: "White sliced bread.",
      long_description:
        "Soft and fluffy white bread, ideal for sandwiches and toast.",
      category: "Bakery",
      image_url: "https://example.com/bread.jpg",
    },
    qty: 2,
  },
  {
    product: {
      name: "Eggs (12 count)",
      price: 250,
      short_description: "Fresh chicken eggs.",
      long_description:
        "Grade A large eggs, perfect for omelets, baking, and more.",
      category: "Dairy & Eggs",
      image_url: "https://example.com/eggs.jpg",
    },
    qty: 5,
  },
  {
    product: {
      name: "Rice (1kg)",
      price: 180,
      short_description: "Long grain white rice.",
      long_description:
        "High-quality long grain white rice, perfect for everyday meals.",
      category: "Grains & Pasta",
      image_url: "https://example.com/rice.jpg",
    },
    qty: 3,
  },
  {
    product: {
      name: "Sugar (1kg)",
      price: 150,
      short_description: "Granulated white sugar.",
      long_description:
        "Fine granulated white sugar, ideal for sweetening beverages and desserts.",
      category: "Pantry",
      image_url: "https://example.com/sugar.jpg",
    },
    qty: 1,
  },
];

console.warn("[Cart application]", process.env.NODE_ENV);

export const render = () => {
  const cart = document.getElementById("shopping-cart");
  if (cart) {
    cart.innerHTML = cartItems.map((item) => {
        return `
          <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            max-width: 50%;
            margin: 5px auto;
            padding: 10px;
            border-radius: 3px;
            background-color: #D0E1D4;
            display: inner-block;
          ">
            <h4>[ x${item.qty} ] ${item.product.name} | [FAKER UUID ${faker.string.uuid()}]</h4>
          </div>
        `;
      }).join('');
  }
};

render();
