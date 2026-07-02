import { MessageCircle, Send, Camera, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import './App.css';

import LOGO from './assets/Logo.jpg';

export default function App() {
  const links = {
    whatsapp: 'https://chat.whatsapp.com/HfsxgeRo1EB4EYS87fi2wx',
    telegram: 'https://t.me/+6c83r0TT2XxkZDAx',
    instagram: 'https://www.instagram.com/sgpromocoeseachadinhos?igsh=OTV6dXZlOTB0Z3Zh&utm_source=qr'
  };

  return (
    <div className="container-page">
      <main className="main-content">
        <section className="hero-card">
          <div className="promo-pill">⚡ Promoções quentes todos os dias</div>

          <div className="logo-box">
            <img src={LOGO} alt="Logo" className="logo-image" />
          </div>

          <h1 className="title">Entre agora no grupo de ofertas</h1>
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
            <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-telegram">
              <div className="btn-content">
                <Send className="icon" />
                <div className="btn-text">
                  <span className="badge badge-telegram">Alternativo</span>
                  <span className="btn-label">Canal no Telegram</span>
                </div>
              </div>
              <ChevronRight className="arrow-icon" />
            </a>

            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
              <div className="btn-content">
                <Camera className="icon" />
                <div className="btn-text">
                  <span className="badge badge-instagram">Novidades</span>
                  <span className="btn-label">Siga no Instagram</span>
                </div>
              </div>
              <ChevronRight className="arrow-icon" />
            </a>
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