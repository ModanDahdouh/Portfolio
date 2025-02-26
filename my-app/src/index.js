import React from "react";
import ReactDOM from "react-dom/client"; // Utiliser 'react-dom/client' pour React 18 et React 19
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";

// Créer un root pour afficher l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Utiliser root.render() pour afficher le composant App
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
