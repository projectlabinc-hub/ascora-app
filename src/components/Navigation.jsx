import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">ASCORA</span>
        </div>
        
        <div className="nav-menu">
          <a href="#catalog" className="nav-link">Каталог</a>
          <a href="#partners" className="nav-link">Стать партнером</a>
          <a href="#about" className="nav-link">О сервисе</a>
          <button className="nav-button">Войти</button>
        </div>
      </div>
    </nav>
  );
}
