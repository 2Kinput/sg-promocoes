import { MessageCircle } from 'lucide-react';
import './App.css';

import LOGO from './assets/Logo.jpg';

export default function App() {
  const links = {
    whatsapp: 'https://chat.whatsapp.com/HfsxgeRo1EB4EYS87fi2wx',
  };
 
  return (
    <div className="container-page">
      <main className="main-content">
        <div className="profile-circle">
          <img src={LOGO} alt="Logo" className="profile-image" />
          <div className="online-status"></div>
        </div>

        <h1 className="main-title">
          <span className="title-line">Onde os melhores</span>
          <span className="title-highlight">descontos da internet</span>
          <span className="title-line">se encontram!</span>
        </h1>

        <div className="badges-container">
          <div className="badge-item">+4.000 MEMBROS</div>
          <div className="badge-item">ATÉ 60% OFF</div>
          <div className="badge-item">VAGAS LIMITADAS</div>
          <div className="badge-item">100% GRATUITO</div>
        </div>

        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-vip">
          <MessageCircle className="whatsapp-icon" />
          ENTRAR NO GRUPO VIP
        </a>

        <p className="subtitle-text">
          Receba promoções reais de PRODUTOS com
          <span className="highlight-text"> 60% OFF </span>
          direto no WhatsApp.
        </p>

        <div className="signature">
          SG-PROMOCOES
        </div>
      </main>
    </div>
  );
}