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
      <div className="grid-overlay"></div>
      
      <div className="banner-content">
        <div className="banner-decoration">××××××</div>
        
        <h1 className="banner-title">PORTFOLIO</h1>
        
        <div className="year-container">
          <span>2023</span>
          <div className="year-line"></div>
          <span>2026</span>
        </div>
        
        <p className="banner-subtitle">
          Créativité, design et développement web
        </p>
        
        <div className="banner-buttons">
          <button 
            onClick={scrollToProjects}
            className="primary-button"
          >
            Découvrir mes projets
          </button>
        </div>
        
        <div className="banner-decoration">××××××</div>
      </div>
    </section>
  );
};

export default Banner;