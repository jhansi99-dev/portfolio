import React from 'react';
import './ProjectCard.css'; // Import your custom styles

const ProjectCard = ({ title, description, githubLink, demoLink ,imageSrc}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card-buttons">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">GitHub</a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;