import "./ProductCard.css";
import products from "../../data/products";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>
              <Link to={`/product/${product.id}`}>
                {product.name}
              </Link>
            </h3>

            <p>{"⭐".repeat(product.rating)}</p>

            <h4>₹{product.price}</h4>

            <button onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;