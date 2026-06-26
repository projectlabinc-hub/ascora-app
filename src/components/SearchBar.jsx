import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-bar">
          <div className="search-field">
            <label>Вид активности</label>
            <input 
              type="text" 
              placeholder="Квадроциклы, полеты, рыбалка..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="search-divider"></div>
          
          <div className="search-field">
            <label>Город</label>
            <input 
              type="text" 
              placeholder="Выберите город"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <span className="location-icon">📍</span>
          </div>
          
          <button className="search-button">Поиск</button>
        </div>
      </div>
    </section>
  );
}
