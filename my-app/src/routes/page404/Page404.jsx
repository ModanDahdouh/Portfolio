import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="container-box-404">
    <div className="container-404">
        <p className="p-404">404</p>
    </div>
    <p className="p-page-404">
        Oups! La page que <br className="br-p-404" /> vous demandez
        n'existe pas.
    </p>
    <Link className="link-retour-accueil" to="/">
        Retourner sur la page d’accueil
    </Link> 
</div>
  )
}
