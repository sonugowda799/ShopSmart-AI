import "./SearchBar.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;