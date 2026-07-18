import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <ProductCard />
      <Footer />
    </>
  );
}

export default Home;