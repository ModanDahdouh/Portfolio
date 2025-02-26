import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Accueil from "./routes/acceuil/Acceuil";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Projet from "./routes/projet/Projet";
import Page404 from "./routes/page404/Page404";



function App() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
      <div className="App">
        <Navbar />
       {/* Animation sur le changement de page */}
       <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ 
            opacity: 1, 
            x: isHome ? 60 : -60  // 🔥 Arrive de la droite si accueil, de la gauche sinon
          }}
          animate={{ 
            opacity: 1, 
            x: [isHome ? -20 : 20, isHome ? 10 : -10, 0]  // 🔥 Effet de feinte à l'arrivée
          }}
          exit={{ 
            opacity: 1, 
            x: isHome 
              ? [0, -20, 30]  // 🔥 Quitte vers la droite avec feinte fluide
              : [0, 20, -30]  // 🔥 Quitte vers la gauche avec feinte fluide
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          onAnimationComplete={() => window.scrollTo(0, 0)}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Accueil />} />
            <Route path="/Projet/:id" element={<Projet />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      </div>
    );
}

export default App;
