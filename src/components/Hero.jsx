import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=600&fit=crop" 
          alt="Adventure activities" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Найди своё следующее приключение</h1>
        <p className="hero-subtitle">Более 500 активностей в 50 городах. От спокойных прогулок до экстремальных приключений.</p>
        <button className="hero-button">
          <span>Подобрать активность</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}
