import React from 'react'
import { dataProjet } from '../../components/data/dataProjet'
import { Link } from 'react-router-dom'
import './CardProjet.scss'

export default function CardProjet() {
  return (
    <div className='card-Projet'>
        {dataProjet.map((item) => (
            <Link
               className="link-card"
               to={`/projet/${item.id}`}
               key={item.id}
            >
                <div key={item.id} className="card">
                    <img className='img-card' src={item.img} alt={item.title} />
                    <h3 className='title-card'>{item.title}</h3>
                    <p className='p-card'>{item.title_des}</p>  
                </div>
            </Link>
        ))}
    </div>
  )
}
