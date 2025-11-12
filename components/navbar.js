class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(17, 24, 39, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
        }
        
        .logo span {
          color: #8b5cf6;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav class="navbar">
        <a href="/" class="logo">
          R1<span>NAMI</span>
        </a>
        
        <div class="nav-links">
          <a href="#features" class="nav-link">Функции</a>
          <a href="#download" class="nav-link">Скачать</a>
          <a href="#" class="nav-link">Документация</a>
          <a href="#" class="nav-link">Поддержка</a>
        </div>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);