import { faker } from '@faker-js/faker';

const products = [
  {
    name: "Milk (1 Liter)",
    price: 120,
    short_description: "Fresh cow's milk.",
    long_description:
      "Pasteurized, homogenized milk, perfect for drinking, cooking, or baking.",
    category: "Dairy",
    image_url: "https://example.com/milk.jpg",
  },
  {
    name: "Bread (500g)",
    price: 85,
    short_description: "White sliced bread.",
    long_description:
      "Soft and fluffy white bread, ideal for sandwiches and toast.",
    category: "Bakery",
    image_url: "https://example.com/bread.jpg",
  },
  {
    name: "Eggs (12 count)",
    price: 250,
    short_description: "Fresh chicken eggs.",
    long_description:
      "Grade A large eggs, perfect for omelets, baking, and more.",
    category: "Dairy & Eggs",
    image_url: "https://example.com/eggs.jpg",
  },
  {
    name: "Rice (1kg)",
    price: 180,
    short_description: "Long grain white rice.",
    long_description:
      "High-quality long grain white rice, perfect for everyday meals.",
    category: "Grains & Pasta",
    image_url: "https://example.com/rice.jpg",
  },
  {
    name: "Sugar (1kg)",
    price: 150,
    short_description: "Granulated white sugar.",
    long_description:
      "Fine granulated white sugar, ideal for sweetening beverages and desserts.",
    category: "Pantry",
    image_url: "https://example.com/sugar.jpg",
  },
  {
    name: "Cooking Oil (1 Liter)",
    price: 300,
    short_description: "Vegetable oil.",
    long_description:
      "Versatile vegetable oil, suitable for frying, cooking, and baking.",
    category: "Pantry",
    image_url: "https://example.com/oil.jpg",
  },
  {
    name: "Tea Bags (25 count)",
    price: 200,
    short_description: "Black tea.",
    long_description:
      "Classic black tea bags, perfect for a relaxing cup of tea.",
    category: "Beverages",
    image_url: "https://example.com/tea.jpg",
  },
  {
    name: "Coffee (200g)",
    price: 400,
    short_description: "Ground coffee.",
    long_description:
      "Medium roast ground coffee, for a rich and flavorful brew.",
    category: "Beverages",
    image_url: "https://example.com/coffee.jpg",
  },
  {
    name: "Salt (500g)",
    price: 50,
    short_description: "Table salt.",
    long_description: "Iodized table salt, essential for seasoning dishes.",
    category: "Pantry",
    image_url: "https://example.com/salt.jpg",
  },
  {
    name: "Pepper (100g)",
    price: 100,
    short_description: "Black pepper.",
    long_description: "Ground black pepper, adds flavor to various cuisines.",
    category: "Pantry",
    image_url: "https://example.com/pepper.jpg",
  },
  {
    name: "Tomato Sauce (500g)",
    price: 120,
    short_description: "Canned tomato sauce.",
    long_description:
      "Smooth and flavorful tomato sauce, ideal for pasta and other dishes.",
    category: "Canned Goods",
    image_url: "https://example.com/tomatosauce.jpg",
  },
  {
    name: "Tuna (170g)",
    price: 200,
    short_description: "Canned tuna in oil.",
    long_description:
      "Chunk light tuna in oil, a convenient source of protein.",
    category: "Canned Goods",
    image_url: "https://example.com/tuna.jpg",
  },
  {
    name: "Chicken Breast (1kg)",
    price: 600,
    short_description: "Fresh chicken breast.",
    long_description:
      "Boneless and skinless chicken breast, a lean source of protein.",
    category: "Meat & Poultry",
    image_url: "https://example.com/chicken.jpg",
  },
  {
    name: "Beef Steak (500g)",
    price: 800,
    short_description: "Beef sirloin steak.",
    long_description:
      "High-quality beef sirloin steak, perfect for grilling or pan-frying.",
    category: "Meat & Poultry",
    image_url: "https://example.com/beef.jpg",
  },
  {
    name: "Apples (1kg)",
    price: 250,
    short_description: "Fresh apples.",
    long_description: "Crisp and juicy apples, a healthy snack.",
    category: "Fruits & Vegetables",
    image_url: "https://example.com/apples.jpg",
  },
  {
    name: "Bananas (1kg)",
    price: 150,
    short_description: "Ripe bananas.",
    long_description: "Sweet and creamy bananas, a good source of potassium.",
    category: "Fruits & Vegetables",
    image_url: "https://example.com/bananas.jpg",
  },
  {
    name: "Potatoes (1kg)",
    price: 100,
    short_description: "Fresh potatoes.",
    long_description:
      "Versatile potatoes, suitable for various cooking methods.",
    category: "Fruits & Vegetables",
    image_url: "https://example.com/potatoes.jpg",
  },
  {
    name: "Onions (500g)",
    price: 80,
    short_description: "Fresh onions.",
    long_description: "Essential ingredient for many dishes.",
    category: "Fruits & Vegetables",
    image_url: "https://example.com/onions.jpg",
  },
  {
    name: "Shampoo (400ml)",
    price: 350,
    short_description: "Gentle shampoo.",
    long_description: "Nourishing shampoo for healthy hair.",
    category: "Personal Care",
    image_url: "https://example.com/shampoo.jpg",
  },
  {
    name: "Toothpaste (100g)",
    price: 150,
    short_description: "Fluoride toothpaste.",
    long_description: "Protects against cavities and freshens breath.",
    category: "Personal Care",
    image_url: "https://example.com/toothpaste.jpg",
  },
  {
    name: "Yogurt (500g)",
    price: 200,
    short_description: "Plain yogurt.",
    long_description: "Creamy plain yogurt, perfect for breakfast or snacks.",
    category: "Dairy",
    image_url: "https://example.com/yogurt.jpg",
  },
  {
    name: "Cheese (200g)",
    price: 350,
    short_description: "Cheddar cheese.",
    long_description: "Sharp cheddar cheese, great for sandwiches and snacks.",
    category: "Dairy",
    image_url: "https://example.com/cheese.jpg",
  },
  {
    name: "Butter (250g)",
    price: 280,
    short_description: "Salted butter.",
    long_description: "Creamy salted butter, ideal for spreading and cooking.",
    category: "Dairy",
    image_url: "https://example.com/butter.jpg",
  },
  {
    name: "Orange Juice (1 Liter)",
    price: 300,
    short_description: "Fresh orange juice.",
    long_description:
      "100% pure orange juice, a refreshing and healthy beverage.",
    category: "Beverages",
    image_url: "https://example.com/orangejuice.jpg",
  },
  {
    name: "Biscuits (200g)",
    price: 150,
    short_description: "Chocolate chip cookies.",
    long_description:
      "Delicious chocolate chip cookies, perfect for a sweet treat.",
    category: "Snacks",
    image_url: "https://example.com/biscuits.jpg",
  },
  {
    name: "Chips (150g)",
    price: 180,
    short_description: "Potato chips.",
    long_description: "Crispy potato chips, a popular snack.",
    category: "Snacks",
    image_url: "https://example.com/chips.jpg",
  },
  {
    name: "Chocolate (100g)",
    price: 200,
    short_description: "Milk chocolate.",
    long_description: "Smooth and creamy milk chocolate bar.",
    category: "Snacks",
    image_url: "https://example.com/chocolate.jpg",
  },
  {
    name: "Ice Cream (1 Liter)",
    price: 500,
    short_description: "Vanilla ice cream.",
    long_description: "Classic vanilla ice cream, a delightful dessert.",
    category: "Frozen Foods",
    image_url: "https://example.com/icecream.jpg",
  },
  {
    name: "Frozen Peas (500g)",
    price: 150,
    short_description: "Frozen peas.",
    long_description: "Convenient and nutritious frozen peas.",
    category: "Frozen Foods",
    image_url: "https://example.com/peas.jpg",
  },
  {
    name: "Pizza (300g)",
    price: 600,
    short_description: "Frozen pizza.",
    long_description: "Delicious frozen pizza, ready to bake.",
    category: "Frozen Foods",
    image_url: "https://example.com/pizza.jpg",
  },
  {
    name: "Detergent (1kg)",
    price: 400,
    short_description: "Laundry detergent.",
    long_description: "Effective laundry detergent for clean clothes.",
    category: "Household",
    image_url: "https://example.com/detergent.jpg",
  },
  {
    name: "Dish Soap (500ml)",
    price: 200,
    short_description: "Dishwashing liquid.",
    long_description: "Powerful dishwashing liquid for sparkling dishes.",
    category: "Household",
    image_url: "https://example.com/dishsoap.jpg",
  },
  {
    name: "Toilet Paper (12 rolls)",
    price: 500,
    short_description: "Toilet paper.",
    long_description: "Soft and absorbent toilet paper.",
    category: "Household",
    image_url: "https://example.com/toiletpaper.jpg",
  },
  {
    name: "Paper Towels (1 roll)",
    price: 150,
    short_description: "Paper towels.",
    long_description: "Strong and absorbent paper towels for cleaning.",
    category: "Household",
    image_url: "https://example.com/papertowels.jpg",
  },
  {
    name: "Soap (100g)",
    price: 80,
    short_description: "Hand soap.",
    long_description: "Antibacterial hand soap for effective cleaning.",
    category: "Personal Care",
    image_url: "https://example.com/soap.jpg",
  },
  {
    name: "Deodorant (50ml)",
    price: 300,
    short_description: "Antiperspirant deodorant.",
    long_description: "Long-lasting protection against sweat and odor.",
    category: "Personal Care",
    image_url: "https://example.com/deodorant.jpg",
  },
  {
    name: "Toothbrush",
    price: 100,
    short_description: "Soft bristle toothbrush.",
    long_description: "Effectively cleans teeth and gums.",
    category: "Personal Care",
    image_url: "https://example.com/toothbrush.jpg",
  },
  {
    name: "Mouthwash (500ml)",
    price: 400,
    short_description: "Antiseptic mouthwash.",
    long_description: "Kills germs and freshens breath.",
    category: "Personal Care",
    image_url: "https://example.com/mouthwash.jpg",
  },
  {
    name: "Razor Blades (5 count)",
    price: 500,
    short_description: "Razor blades.",
    long_description: "Sharp and durable razor blades for a close shave.",
    category: "Personal Care",
    image_url: "https://example.com/razorblades.jpg",
  },
  {
    name: "Shaving Cream (200ml)",
    price: 250,
    short_description: "Shaving cream.",
    long_description: "Provides a smooth and comfortable shave.",
    category: "Personal Care",
    image_url: "https://example.com/shavingcream.jpg",
  },
];

console.warn("[Products application]", process.env.NODE_ENV);

export const render = (el = document.getElementById('product-list')) => {
  if (el) {
    el.innerHTML = products.map((product) => {
      return `
        <div class="product-card" style="border: 1px solid #ccc; padding: 10px 15px; margin: 10px; width: calc(19% - 40px); box-sizing: border-box; background-color: #f2f2f2; border-radius: 3px;">
          <img src="${product.image_url}" alt="${product.name}" style="width: 100%; height: auto;" />
          <h3>${product.name} [FAKER UUID: ${faker.string.uuid()}]</h3>
          <p>${product.short_description}</p>
          <p>Price: $${product.price}</p>
        </div>
      `;
    }).join('');

    // Add hover effect using JavaScript
    const styles = document.createElement('style');
    styles.innerHTML = `
      .product-card:hover {
        background-color: #e6f7ff;
      }
    `;
    document.head.appendChild(styles);
  }
};

// Call the render function when the products application is loaded
// This is only for standalone development
if (process.env.NODE_ENV === 'development') {
  render();
}

// Ensure the render function is called when the products application is loaded
export default { render };
