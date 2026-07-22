import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Total : ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;