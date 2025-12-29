import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-decoration">××××××</div>
        <h2 className="contact-title">CONTACT</h2>
        
        <div className="contact-content">
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-label">EMAIL</div>
              <a 
                href="mailto:celestine.mahieux@gmail.com" 
                className="contact-value"
              >
                celestine.mahieux@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <div className="contact-label">TÉLÉPHONE</div>
              <a 
                href="tel:+33781591663" 
                className="contact-value"
              >
                07 81 59 16 63
              </a>
            </div>
            
            <div className="contact-item">
              <div className="contact-label">LINKEDIN</div>
              <a 
                href="https://www.linkedin.com/in/celestine-mahieux-6b8620332" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-value"
              >
                Célestine Mahieux
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;