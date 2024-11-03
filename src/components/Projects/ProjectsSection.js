import React from 'react';
import ProjectCard from './ProjectCard'; // Importing ProjectCard
import './ProjectsSection.css'; // Import custom styles for the section
import projectImage1 from '../../assets/project1.png';  // Importing the image  // Adjust the path based on where the image is stored
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description for project 1.',
      demoLink: 'https://github.com/jhansi99-dev',
      githubLink: 'https://github.com/jhansi99-dev',
      imageSrc: projectImage1, // Using imported image
    },
    {
      imageSrc: 'path/to/bits-of-code.png',
      title: 'Bits-of-Code',
      description: 'My personal blog page built with...',
      githubLink: 'https://github.com/jhansi99-dev',
      demoLink: 'https://github.com/jhansi99-dev',
    },
    {
      imageSrc: 'path/to/editor-io.png',
      title: 'Editor.io',
      description: 'This is third project',
      githubLink: 'https://github.com/jhansi99-dev',
      demoLink: 'https://github.com/jhansi99-dev',
    },
  ];

  return (
    <>
    <div className="projects-content">
      <h3>My Recent <span className='highlight'>Projects</span></h3>
      <p>Here are a few projects i'have worked on recently</p>
    </div>
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default ProjectsSection;