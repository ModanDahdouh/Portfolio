import React from 'react'
import { motion } from "framer-motion";
import CardProjet from '../../components/cardProjet/CardProjet'
import MesServices from '../../components/mesServices/MesServices'
import Form from '../../components/formContact/FormContact';
import Diplome from '../../components/diplome/Diplome';
export default function Accueil() {
  const text = `Développeur front-end\npassionné par la création d'interfaces modernes et performantes. Spécialisé en React .`;

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
    transition: { delay: i * 0.03}, 
    }),
  };

  return (
    <>
      <header className='acceuil'>
        <img className='photos-Profil' src="./img/imgPortfolio (1).JPG" alt="Profil" />
        <p className='description-Profil'>
          {text.split("\n").map((line, i) => (
            <span key={i} style={{ display: "block" }}> 
              {line.split(/(\s+)/).map((word, j) => (
                <motion.span
                  key={j}
                  custom={j}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  
                >
                  {word}
                </motion.span>
              ))}
            </span>
  ))}
</p>

      </header>
      <main>
        <section className='projet'><h2 className='title-projet'>Projet</h2>
          <CardProjet />
        </section>
        <section className='experience'>
          <h2 className='h2-experience'>Expérience technique</h2>
          <ul className='skills-list'>
            <li className='skill'>Html</li>
            <li className='skill'>Css</li>
            <li className='skill'>Sass</li>
            <li className='skill'>Js</li>
            <li className='skill'>React</li>
            <li className='skill'>Redux</li>
            <li className='skill'>Git</li>
            <li className='skill'>Swagger</li>
            <li className='skill'>Jest</li>
            <li className='skill'>Lua</li>
            <li className='skill'>Love2D</li>
          </ul>
          </section>
        <section className='service'>
            <h2 className='h2-service'>Mes Services</h2>
            <MesServices />
        </section>
        <Diplome />
        <section className='contact'>
          <h2 className='h2-contact'>Contact</h2>
          <Form />
        </section>
      </main>
    </>
  )
}


