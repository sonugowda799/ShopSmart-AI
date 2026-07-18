import "./ProductCard.css";
import products from "../../data/products";

function ProductCard() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="emoji">{product.image}</div>

            <h3>{product.name}</h3>

            <p>{"⭐".repeat(product.rating)}</p>

            <h4>₹{product.price}</h4>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;