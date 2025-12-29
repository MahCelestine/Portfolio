import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'À PROPOS', id: 'about' },
    { name: 'PROJETS', id: 'projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header-minimal ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-minimal-container">
          {/* Logo à gauche */}
          <button 
            className="header-logo" 
            onClick={scrollToTop}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Célestine M.
          </button>

          {/* Navigation desktop à droite */}
          <nav className="header-nav">
            <div className="nav-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="nav-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </button>
              ))}
            
            {/* Bouton Contact séparé */}
            <a
              className="contact-button"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleContactClick();
              }}
            >
              CONTACT
            </a>
            </div>
          </nav>

          {/* Menu burger mobile - devient bouton de fermeture quand ouvert */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="mobile-menu-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Bouton Contact dans le menu mobile */}
              <button
                className="mobile-contact-button"
                onClick={handleContactClick}
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;