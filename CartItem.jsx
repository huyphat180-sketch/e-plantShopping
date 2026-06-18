import React from "react";

function CartItem() {
return ( <div> <h2>Shopping Cart</h2>

```
  <img src="plant.jpg" alt="plant" />

  <h3>Snake Plant</h3>

  <p>Unit Price: $15</p>

  <p>Quantity: 2</p>

  <p>Total: $30</p>

  <button>-</button>
  <button>+</button>
  <button>Delete</button>

  <h2>Total Cart Amount: $30</h2>

  <button
    onClick={() => alert("Coming Soon")}
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

