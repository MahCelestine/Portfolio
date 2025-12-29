import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Optionnel : ajouter une petite décoration */}
          <div className="footer-decoration">××××××</div>
          
          <div className="footer-brand">
            <h3 className="footer-title">PORTFOLIO</h3>
          </div>
          
          <div className="footer-contact">
            <p className="copyright">
              © {currentYear} Célestine Mahieux — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;