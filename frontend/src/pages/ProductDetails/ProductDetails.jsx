import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{product.image}</h1>
      <h2>{product.name}</h2>
      <h3>₹{product.price}</h3>
      <p>Rating: {"⭐".repeat(product.rating)}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;