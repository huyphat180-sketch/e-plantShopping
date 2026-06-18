import React, { useState } from "react";

function CartItem() {
const [cart, setCart] = useState([
{
id: 1,
name: "Snake Plant",
cost: 15,
quantity: 2,
image: "https://via.placeholder.com/100"
},
{
id: 2,
name: "Peace Lily",
cost: 20,
quantity: 1,
image: "https://via.placeholder.com/100"
}
]);

const calculateTotalAmount = () => {
return cart.reduce(
(total, item) =>
total + item.quantity * item.cost,
0
);
};

const handleIncrement = (id) => {
setCart(
cart.map((item) =>
item.id === id
? {
...item,
quantity: item.quantity + 1
}
: item
)
);
};

const handleDecrement = (id) => {
setCart(
cart
.map((item) =>
item.id === id
? {
...item,
quantity: item.quantity - 1
}
: item
)
.filter((item) => item.quantity > 0)
);
};

const handleRemove = (id) => {
setCart(
cart.filter(
(item) => item.id !== id
)
);
};

return ( <div> <h1>Shopping Cart</h1>

```
  <h2>
    Total Cart Amount:
    ${calculateTotalAmount()}
  </h2>

  {cart.map((item) => (
    <div key={item.id}>
      <img
        src={item.image}
        alt={item.name}
        width="100"
      />

      <h3>{item.name}</h3>

      <p>Unit Price: ${item.cost}</p>

      <p>
        Quantity: {item.quantity}
      </p>

      <p>
        Total Cost:
        ${item.quantity * item.cost}
      </p>

      <button
        onClick={() =>
          handleIncrement(item.id)
        }
      >
        +
      </button>

      <button
        onClick={() =>
          handleDecrement(item.id)
        }
      >
        -
      </button>

      <button
        onClick={() =>
          handleRemove(item.id)
        }
      >
        Delete
      </button>

      <hr />
    </div>
  ))}

  <button
    onClick={() =>
      alert("Coming Soon")
    }
  >
    Checkout
  </button>

  <button>
    Continue Shopping
  </button>
</div>
```

);
}

export default CartItem;
