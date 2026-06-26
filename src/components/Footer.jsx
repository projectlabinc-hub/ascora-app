import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className="footer-title">ASCORA</h4>
            <p className="footer-description">Ваш помощник в поиске идеального приключения</p>
          </div>
          
          <div className="footer-column">
            <h5 className="footer-subtitle">Компания</h5>
            <a href="#about">О нас</a>
            <a href="#blog">Блог</a>
            <a href="#careers">Карьера</a>
          </div>
          
          <div className="footer-column">
            <h5 className="footer-subtitle">Поддержка</h5>
            <a href="#help">Справка</a>
            <a href="#contact">Контакты</a>
            <a href="#faq">FAQ</a>
          </div>
          
          <div className="footer-column">
            <h5 className="footer-subtitle">Соцсети</h5>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#vk">VK</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ASCORA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
