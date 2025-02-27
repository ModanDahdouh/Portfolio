import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
      <nav>
        <div className='div-nav'>
          <h1 className='h1-nav'>Modan Dahdouh</h1>
          <h2 className='h2-nav'>Developeur Web</h2>
        </div>
        
          <ul className='ul-nav'>
              <li><a href="https://www.youtube.com/watch?v=TvMrtOPphjE&list=RDinBKFMB-yPg&index=12" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
      </nav>
  )
}
