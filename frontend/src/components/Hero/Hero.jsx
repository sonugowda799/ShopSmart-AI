import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Smart Shopping Starts Here</h1>

        <p>
          Discover Electronics, Fashion, Groceries and much more with
          AI-powered recommendations.
        </p>

        <div className="buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="explore-btn">Explore Products</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;