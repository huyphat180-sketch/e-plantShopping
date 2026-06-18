import React, { useState } from "react";

function ProductList() {
const [cartCount, setCartCount] = useState(0);
const [addedItems, setAddedItems] = useState([]);

const plants = [
// Air Purifying Plants
{ id: 1, name: "Snake Plant", price: 15, category: "Air Purifying", image: "https://via.placeholder.com/150" },
{ id: 2, name: "Peace Lily", price: 20, category: "Air Purifying", image: "https://via.placeholder.com/150" },
{ id: 3, name: "Spider Plant", price: 18, category: "Air Purifying", image: "https://via.placeholder.com/150" },
{ id: 4, name: "Areca Palm", price: 25, category: "Air Purifying", image: "https://via.placeholder.com/150" },
{ id: 5, name: "Rubber Plant", price: 22, category: "Air Purifying", image: "https://via.placeholder.com/150" },
{ id: 6, name: "Boston Fern", price: 19, category: "Air Purifying", image: "https://via.placeholder.com/150" },

```
// Succulents
{ id: 7, name: "Aloe Vera", price: 12, category: "Succulents", image: "https://via.placeholder.com/150" },
{ id: 8, name: "Jade Plant", price: 16, category: "Succulents", image: "https://via.placeholder.com/150" },
{ id: 9, name: "Echeveria", price: 10, category: "Succulents", image: "https://via.placeholder.com/150" },
{ id: 10, name: "Haworthia", price: 11, category: "Succulents", image: "https://via.placeholder.com/150" },
{ id: 11, name: "Burro's Tail", price: 14, category: "Succulents", image: "https://via.placeholder.com/150" },
{ id: 12, name: "Panda Plant", price: 13, category: "Succulents", image: "https://via.placeholder.com/150" },

// Flowering Plants
{ id: 13, name: "Orchid", price: 30, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
{ id: 14, name: "Begonia", price: 24, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
{ id: 15, name: "Anthurium", price: 28, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
{ id: 16, name: "African Violet", price: 20, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
{ id: 17, name: "Geranium", price: 18, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
{ id: 18, name: "Cyclamen", price: 21, category: "Flowering Plants", image: "https://via.placeholder.com/150" }
```

];

const categories = [
"Air Purifying",
"Succulents",
"Flowering Plants"
];

const addToCart = (plant) => {
setAddedItems([...addedItems, plant.id]);
setCartCount(cartCount + 1);
};

return ( <div> <nav> <h2>Paradise Nursery</h2> <a href="/">Home</a> |{" "} <a href="/plants">Plants</a> |{" "} <a href="/cart">Cart ({cartCount})</a> </nav>

```
  {categories.map((category) => (
    <div key={category}>
      <h2>{category}</h2>

      <div>
        {plants
          .filter((plant) => plant.category === category)
          .map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="120"
              />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button
                onClick={() => addToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>
    </div>
  ))}
</div>
```

);
}

export default ProductList;
