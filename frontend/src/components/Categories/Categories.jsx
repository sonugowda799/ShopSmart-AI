import "./Categories.css";

function Categories() {
  const categories = [
    { icon: "📱", name: "Electronics" },
    { icon: "👕", name: "Fashion" },
    { icon: "💄", name: "Beauty" },
    { icon: "🏠", name: "Home" },
    { icon: "📚", name: "Books" },
    { icon: "⚽", name: "Sports" },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;