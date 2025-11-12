class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: rgba(17, 24, 39, 0.9);
          color: rgba(255, 255, 255, 0.7);
          padding: 3rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .footer-logo span {
          color: #8b5cf6;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
        }
        
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-about">
          <div class="footer-logo">R1<span>NAMI</span></div>
          <p class="footer-description">Лучшее что мы можем дать для вас. Быстро, безопасно, приватно.</p>
          <div class="footer-social">
            <a href="#" class="social-link"><i data-feather="twitter"></i></a>
            <a href="#" class="social-link"><i data-feather="github"></i></a>
            <a href="#" class="social-link"><i data-feather="youtube"></i></a>
            <a href="#" class="social-link"><i data-feather="discord"></i></a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Продукт</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Функции</a>
            <a href="#" class="footer-link">Обновления</a>
            <a href="#" class="footer-link">Цены</a>
            <a href="#" class="footer-link">Документация</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Компания</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">О нас</a>
            <a href="#" class="footer-link">Блог</a>
            <a href="#" class="footer-link">Карьера</a>
            <a href="#" class="footer-link">Контакты</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-heading">Поддержка</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Центр помощи</a>
            <a href="#" class="footer-link">Сообщество</a>
            <a href="#" class="footer-link">Безопасность</a>
            <a href="#" class="footer-link">Статус</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© 2023 R1NAMI Browser. Все права защищены.</p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
