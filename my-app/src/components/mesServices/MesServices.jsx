import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Développement Frontend',
    description: " Création d'interfaces modernes et interactives avec React, Vue.js et Tailwind CSS.",
  },
  {
    title: 'Développement Backend',
    description: ' Mise en place d\'API performantes avec Node.js, Express et bases de données SQL/NoSQL.',
  },
  {
    title: 'Création de Sites Web',
    description: ' Développement de sites vitrines et e-commerce optimisés pour le SEO et mobiles.',
  },
  {
    title: 'Optimisation et Performance',
    description: ' Amélioration du chargement et du référencement (SEO) pour une meilleure expérience utilisateur.',
  },
  {
    title: 'Optimisation et Performance',
    description: ' Amélioration du chargement et du référencement (SEO) pour une meilleure expérience utilisateur.',
  },
  {
    title: 'Optimisation et Performance',
    description: ' Amélioration du chargement et du référencement (SEO) pour une meilleure expérience utilisateur.',
  },
];

export default function MesServices() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    const interval = setInterval(() => {
      if (i < services[index].description.length) {
        setDisplayText((prev) => prev + services[index].description[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + services.length) % services.length);
  const goToSlide = (slideIndex) => setIndex(slideIndex); // Gérer le clic sur un dot

  return (
    <div className="mesService max-w-xl mx-auto p-4">
      <div className="carousel-mesService relative bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-carousel-mesService"
          >
            <h2 className="text-xl font-semibold">{services[index].title}</h2>
            <p className="p-carousel mt-2 text-sm text-gray-300">{displayText}</p>
          </motion.div>
        </AnimatePresence>

        {/* Boutons */}
        <div className="button-carousel flex justify-between mt-4">
          <button onClick={prevSlide} className="btn-carousel p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <ChevronLeft className="svg-button-carousel" size={20} />
          </button>
          <button onClick={nextSlide} className="btn-carousel p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <ChevronRight className="svg-button-carousel" size={20} />
          </button>
        </div>

        {/* Dots de navigation */}
        <div className="dots-carousel flex justify-center mt-4">
          {services.map((_, slideIndex) => (
            <button
              key={slideIndex}
              className={`dot ${index === slideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
