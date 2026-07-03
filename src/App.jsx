import { MessageCircle, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import './App.css';

import LOGO from './assets/Logo.jpg';

export default function App() {
  const links = {
    whatsapp: 'https://chat.whatsapp.com/HfsxgeRo1EB4EYS87fi2wx',
  };

  const marketLogos = {
    mercadolivre: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Mercado_Livre_wordmark_(Portuguese_version).svg',
    amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    shein: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Shein_Logo_2017.svg',
    shopee: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg'
  };
 
  return (
    <div className="container-page">
      <main className="main-content">
        <section className="hero-card">
          <div className="promo-pill">⚡ Promoções quentes todos os dias</div>

          <div className="logo-box">
            <img src={LOGO} alt="Logo" className="logo-image" />
          </div>

          <h1 className="title">Entre no maior  grupo de Promoções do brasil</h1>
          <p className="subtitle">
            Receba cupons reais, descontos relâmpago e oportunidades exclusivas em tempo real, direto no seu celular.
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 className="check-icon" />
              <span>Ofertas verificadas</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 className="check-icon" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </section>

          <div className="links-group">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp primary-action">
            <div className="btn-content">
              <MessageCircle className="icon" />
              <div className="btn-text">
                <span className="badge badge-whatsapp">Entrar agora</span>
                <span className="btn-label">Grupo no WhatsApp</span>
              </div>
            </div>
            <ChevronRight className="arrow-icon" />
          </a>
          <div className="secondary-links">
            <div className="market-logos">
              <div className="market-link">
                <img src={marketLogos.mercadolivre} alt="Mercado Livre" className="market-logo" />
              </div>
              <div className="market-link">
                <img src={marketLogos.amazon} alt="Amazon" className="market-logo" />
              </div>
              <div className="market-link">
                <img src={marketLogos.shein} alt="Shein" className="market-logo" />
              </div>
              <div className="market-link">
                <img src={marketLogos.shopee} alt="Shopee" className="market-logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-card">
          <h3 className="benefits-title">
            <Sparkles className="sparkles-icon" /> Por que as pessoas entram
          </h3>
          <ul className="benefits-list">
            <li className="benefits-item">
              <CheckCircle2 className="check-icon" />
              <span>Alertas rápidos de ofertas relâmpago com economia real.</span>
            </li>
            <li className="benefits-item">
              <CheckCircle2 className="check-icon" />
              <span>Conteúdo confiável, sem enrolação e sem links duvidosos.</span>
            </li>
            <li className="benefits-item">
              <CheckCircle2 className="check-icon" />
              <span>Economia para quem quer aproveitar promoções sem perder tempo.</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} SG Promoções. Economia inteligente, em poucos cliques.
      </footer>
    </div>
  );
}