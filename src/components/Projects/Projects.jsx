import React, { useState } from 'react';
import { projects, drawings } from '../../data';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Petit délai pour l'animation de fermeture
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-decoration">××××××</div>
          <h2 className="projects-title">MES PROJETS</h2>
          <p className="projects-subtitle">Une sélection de mes réalisations</p>
          <div className="title-line"></div>
        </div>

        {/* Projets académiques */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(project);
                }
              }}
            >
              {project.image && (
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="project-header">
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-description">{project.annee}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projets personnels */}
        
          <div className="personal-header">
            <h3 className="personal-title">Projets personnels</h3>
            <p className="personal-description">Voici un aperçu des dessins que je réalise depuis plusieurs années.</p>
            <div className="title-line"></div>
          </div>
          <div className="personal-content">
            <div className="drawings-grid">
              {drawings.map((drawing) => (
                <div key={drawing.id} className="drawing-item">
                  <img 
                    src={drawing.image} 
                    alt={drawing.title}
                    className="drawing-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;