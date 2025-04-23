import { useEffect, useRef, useState } from 'react';

export default function DiplomeSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Si clic hors de la section -> dézoom
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setIsZoomed(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // l'écouteur reste toujours

  const handleImageClick = () => {
    // toggle zoom (ouvre ou ferme)
    setIsZoomed((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      className={`diplome-section ${isZoomed ? 'zoomed' : ''}`}
    >
      <h2 className="diplome-title">Diplôme</h2>
      <img
        src="./img/diplome.png"
        alt="diplôme"
        className="diplome-img"
        onClick={handleImageClick}
      />
    </section>
  );
}
