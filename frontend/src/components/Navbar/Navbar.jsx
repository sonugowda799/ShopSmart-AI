import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🛒 ShopSmart AI</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;