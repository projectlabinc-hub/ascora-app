import './Categories.css';

const categoriesData = [
  {
    id: 1,
    name: 'Катера',
    icon: '⛵',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Квадроциклы',
    icon: '🏍️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Полеты',
    icon: '✈️',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Рыбалка',
    icon: '🎣',
    image: 'https://images.unsplash.com/photo-1545652711-491a1a331e2b?w=300&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Гидроциклы',
    icon: '🌊',
    image: 'https://images.unsplash.com/photo-1544551763-92ab472cad5d?w=300&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Конные прогулки',
    icon: '🐴',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003d96e4e?w=300&h=300&fit=crop'
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories-container">
        <h2 className="categories-title">Популярные категории</h2>
        <div className="categories-grid">
          {categoriesData.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
