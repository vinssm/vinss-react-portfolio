import React from 'react';
import Photography from "../assets/images/Photography.JPG"

function Projects() {
    const projects = [
        {
            image: 'Photography.JPG',
            alt: 'Photography by Vinay',
            title: 'Photography by Vinay',
            description: 'Photography by Vinay is a professional Photography website',
            technologies: 'Angular',
            url: 'http://www.photographybyvinay.com/#/',
            git: 'https://github.com/vinssm/PHOTOGRAPHYBYVINAY'
        }
    ]
    return(
        <div className="all-projects">
          {projects.map(project => (
            <div className="single-project" key={project.title}>
              <h3>{project.title}</h3>
              <div
                className="project-div">               
                  <img src={Photography} alt="Pic"></img>
                <p className="project-text project-description">{project.description}</p>
                <p className="project-text project-tech">{project.technologies}</p>                
              </div>
            </div>
          ))}
        </div>
      )
    }
    
export default Projects;