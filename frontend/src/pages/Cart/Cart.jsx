import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;