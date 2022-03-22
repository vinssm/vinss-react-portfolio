import React, { useState } from 'react';
import Photography from '../assets/images/Photography.jpg'

function Portfolio() {
    const [projects] = useState([
        {
            title: 'Photography by Vinay',  
            image: 'Photography.jpg',
            alt: 'Photography by Vinay',            
            description: 'Photography by Vinay is a professional Photography website',
            technologies: 'Angular',
            url: 'http://www.photographybyvinay.com/#/',
            git: 'https://github.com/vinssm/PHOTOGRAPHYBYVINAY'
        },
        {
          title: 'Street Blog Recipes',  
          image: 'blogRecipes.jpg',
          alt: 'Street Blog Recipes',            
          description: 'Street Blog Recipes is a recipe blogger',
          technologies: 'Node.js, Express, MySQL, Sequelize', 
          url: 'https://github.com/vinssm/street_blog',
          git: 'https://young-fortress-79519.herokuapp.com/'
        },
        {
          title: 'Java Script Quiz Challange',  
          image: 'Quiz.gif',
          alt: 'Java Script Quiz Challange',            
          description: 'Java Script Quiz is a Challange created in Java Script',
          technologies: 'Java Script',
          url: 'https://github.com/vinssm/quizChallange',
          git: 'https://github.com/vinssm/quizChallange'
      },
      {
        title: 'Weather Dashboard',  
        image: 'weatherDashboard.png',
        alt: 'Photography by Vinay',            
        description: 'Photography by Vinay is a professional Photography website',
        technologies: 'API, Java Scipt',
        url: 'https://vinssm.github.io/Weather-Dashboard/',
        git: 'https://github.com/vinssm/Weather-Dashboard'
    },
    {
      title: 'Work Day Scheduler',  
      image: 'workdayScheduler.png',
      alt: 'Work Day Scheduler',            
      description: 'Work Day Scheduler ',
      technologies: 'Java Script',
      url: 'https://vinssm.github.io/WorkDay-Scheduler/',
      git: 'https://github.com/vinssm/WorkDay-Scheduler'
  }
    ]);
    return(
      <div className="container">
        <h2>Vinay Portfolio</h2>
        <div className="proj">
          {projects.map((project, i) => 
            <div className="projs" key={i}>
              <h3>{project.title}</h3>
              <img className='img' src={require(`../assets/images/${project.image}`)} alt={project.alt} />              
              <div>                       
                <p className="projText projDes">{project.description}</p>
                <p className="projText projDes">{project.technologies}</p>                               
              </div>
              <a className='aTag'  href={project.url} target="_blank"> <b>View Site</b></a> 
            </div>
          )}
            </div>
        </div>
      )
    }
    
export default Portfolio;