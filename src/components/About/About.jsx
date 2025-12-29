import { GraduationCap, Palette, Briefcase, FileText } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    "HTML/CSS",
  "JavaScript", 
  "React",
  "Laravel",      
  "Livewire",
  "Wordpress",
  "Figma",
  ];

const handleCVClick = () => {
  const baseUrl = '/Portfolio/';
  window.open(`${baseUrl}document/CV_MAHIEUX_Celestine.pdf`, '_blank');
};

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-decoration">××××××</div>
        <h2 className="about-title">À PROPOS</h2>
        <h3 className="name-title">Célestine Mahieux</h3>
        <div className="title-line"></div>
        <div className="about-grid">
          <div className="student-section">
            <div className="student-header">
              <div className="student-icon">
                <GraduationCap size={20} color="var(--color-brown-dark)" />
              </div>
              <h4 className="student-title">ÉTUDIANTE BUT MMI</h4>
            </div>
            <p className="student-description">
              Je suis étudiante en 3e année BUT MMI (Métiers du Multimédia et de l'Internet) 
              dans le parcours développement web et dispositifs interactifs. Sur mon temps personnel, je fais du dessins digital.
            </p>
          </div>

          <div className="skills-section">
            <div className="skills-header">
              <div className="skills-icon">
                <Palette size={20} color="var(--color-brown-dark)" />
              </div>
              <h4 className="student-title">Compétences</h4>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-bullet"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="search-section">
            <div className="search-header">
              <div className="search-icon">
                <Briefcase size={20} color="var(--color-brown-dark)" />
              </div>
              <h4 className="student-title">Recherche</h4>
            </div>
            <p className="student-description">
              À la recherche d'un stage en développement web pour mettre en pratique 
              mes compétences et découvrir le monde professionnel.
            </p>
            <button 
              onClick={handleCVClick}
              className="cv-button"
            >
              <FileText size={20} />
               Voir mon CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;