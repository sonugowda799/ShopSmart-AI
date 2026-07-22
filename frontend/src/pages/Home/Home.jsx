import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <ProductCard />
    </>
  );
}

export default Home;