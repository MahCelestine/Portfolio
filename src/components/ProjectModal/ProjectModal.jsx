import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Fermer avec la touche ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Extraire l'ID de la vidéo YouTube
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = project.lienVideo ? getYouTubeId(project.lienVideo) : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <span>×</span>
        </button>
        
        <div className="modal-header">
          <span className="modal-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
          <span className="modal-year">{project.annee}</span>
        </div>
        
        <div className="modal-body">
          
          <div className="modal-content-section">
            {/* Description longue */}
            <div className="modal-description-long">
              <h3 className="section-title">Description</h3>
              <p>{project.descriptionLong}</p>
            </div>
            
            {/* Vidéo YouTube */}
            {videoId && (
              <div className="modal-video">
                <h3 className="section-title">Vidéo du projet</h3>
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Vidéo du projet ${project.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-video"
                  />
                </div>
                <a 
                  href={project.lienVideo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Voir la vidéo sur YouTube →
                </a>
              </div>
            )}
            
            {/* Année */}
            <div className="modal-info">
              <div className="info-item">
                <span className="info-label">Année :</span>
                <span className="info-value">{project.annee}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Catégorie :</span>
                <span className="info-value">{project.category}</span>
              </div>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="info-item">
                  <span className="info-label">Technologies :</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;