import './Offers.css';

const offersData = [
  {
    id: 1,
    name: 'Морской тур на катере',
    location: 'Сочи',
    price: '8 500',
    rating: 4.9,
    reviews: 247,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Экстремальный полет на вертолете',
    location: 'Москва',
    price: '45 000',
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Квадроциклы в лесу',
    location: 'Казань',
    price: '6 200',
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Спортивная рыбалка',
    location: 'Санкт-Петербург',
    price: '12 000',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1545652711-491a1a331e2b?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Полет на гидроцикле',
    location: 'Краснодар',
    price: '7 800',
    rating: 4.8,
    reviews: 328,
    image: 'https://images.unsplash.com/photo-1544551763-92ab472cad5d?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Верховая езда в степи',
    location: 'Оренбург',
    price: '4 500',
    rating: 4.6,
    reviews: 265,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003d96e4e?w=400&h=300&fit=crop'
  },
];

export default function Offers() {
  return (
    <section className="offers">
      <div className="offers-container">
        <h2 className="offers-title">Популярные предложения</h2>
        <div className="offers-grid">
          {offersData.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image-wrapper">
                <img 
                  src={offer.image} 
                  alt={offer.name}
                  className="offer-image"
                />
                <div className="offer-badge">{offer.location}</div>
              </div>
              
              <div className="offer-content">
                <h3 className="offer-name">{offer.name}</h3>
                
                <div className="offer-rating">
                  <span className="stars">⭐ {offer.rating}</span>
                  <span className="reviews">({offer.reviews} отзывов)</span>
                </div>
                
                <div className="offer-footer">
                  <div className="offer-price">
                    <span className="price-label">От</span>
                    <span className="price-value">{offer.price}₽</span>
                  </div>
                  <button className="offer-button">Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
