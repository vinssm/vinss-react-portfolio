import React from 'react';
import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import EmailIcon from '../assets/icons/email.png';

function Footer() {
  const links = [
    {
      name: 'github',
      description: 'Icon from github.com that links to external site.',
      src: gitIcon,
      url: "https://github.com/vinssm"
    },
    {
      name: 'linkedin',
      description: 'Icon from linkedin.com that links to external site.',
      src: linkedinIcon,
      url: "https://www.linkedin.com/in/naga-v/"
    },
    {
      name: 'Email',
      src: EmailIcon,
      url: "mailto:vallab.v@gmail.com"
     },
  ]

  return(
<div className="footer">
      {links.map(link => (
        <a href={link.url} target="_blank" rel="noreferrer" key={link.name}>
          <img
            src={link.src}
            alt={link.description}
            className="icon"
          >
          </img>
        </a>
      ))}
    </div>
   ) 
}

export default Footer;