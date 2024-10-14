import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import BrandCarousel from '../components/BrandCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import TopSellingCars from '../components/TopSellingCars';
import RecommendedCars from '../components/RecommendedCars';
import '../styles/global.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <SearchBar />
        <BrandCarousel />
        <CategoryCarousel />
        <TopSellingCars />
        <RecommendedCars />
      </main>
    </div>
  );
};

export default Home;
