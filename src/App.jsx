import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Offers from './components/Offers';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <SearchBar />
      <Categories />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
