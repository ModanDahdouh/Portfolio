import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dataProjet } from '../../components/data/dataProjet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function CardSelected() {
    const { id } = useParams(); // Utilisation de useParams() pour obtenir l'ID du projet
    const selectedProjet = dataProjet.find((item) => item.id === id); // Recherche du projet correspondant à l'ID
    const navigate = useNavigate();

     // useEffect() est utilisé pour eviter la page 404 avant chargement
    useEffect(() => {
        if (!selectedProjet) {
            navigate('/404', { replace: true }); // Remplace l'URL actuelle par /404
        }
    }, [selectedProjet, navigate]);

    if (!selectedProjet) {
        return null; // Empêche le rendu de la page projet en cas d'erreur = optimisation
    }
  return (
    <>
      <div key={selectedProjet.id} className='selected-experience'>
        <div className='card-selected-description'>
          <p>{selectedProjet.description}</p>
          <div className='card-selected-description'>
            <a className='link-projet' href={selectedProjet.github} target="_blank" rel="noopener noreferrer">Code du Projet<FontAwesomeIcon icon={faGithub} /></a>
            <p>{selectedProjet.skills}</p>
          </div>
        </div>
        <div className='card-selected-img'>
          <img className='img-card-selected' src={selectedProjet.img_des || selectedProjet.img} alt={selectedProjet.title} />
        </div>
      </div> 
  </>
  )
}
