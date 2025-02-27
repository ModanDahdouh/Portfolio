import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CardSelected from '../../components/cardSeleted/CardSelected'

export default function Projet() {
  return (
    <section className='projet-APropos'>
      <Link className='link-Back' to='/'>
      <FontAwesomeIcon icon={faChevronLeft} />
      <h2 className='h2-Back'>Go Back</h2>
      </Link>
      <CardSelected />
    </section>
  )
}
