import React from 'react';
import './Banner.css';

const Banner = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner">
      {/* Quadrillage de fond */}
      <div className="grid-overlay"></div>
      
      <div className="banner-content">
        {/* Première ligne de ×××××× */}
        <div className="banner-decoration">××××××</div>
        
        {/* Titre principal - EN PREMIER */}
        <h1 className="banner-title">PORTFOLIO</h1>
        
        {/* Années - APRÈS le titre */}
        <div className="year-container">
          <span>2023</span>
          <div className="year-line"></div>
          <span>2025</span>
        </div>
        
        {/* Sous-titre */}
        <p className="banner-subtitle">
          Créativité, design et développement web
        </p>
        
        {/* Bouton */}
        <div className="banner-buttons">
          <button 
            onClick={scrollToProjects}
            className="primary-button"
          >
            Découvrir mes projets
          </button>
        </div>
        
        {/* Deuxième ligne de ×××××× */}
        <div className="banner-decoration">××××××</div>
      </div>
    </section>
  );
};

export default Banner;