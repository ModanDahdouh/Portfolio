import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Pour afficher un message de confirmation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Envoyer l'e-mail avec EmailJS
    emailjs.send(
      "service_zvq5azg",   // Remplace par ton Service ID
      "template_6x4127z",  // Remplace par ton Template ID
      formData,
      "jD3mpeR6rJb2o1ngF"       // Remplace par ton Public Key
    ).then(
      (response) => {
        console.log("E-mail envoyé !", response);
        setStatus("Votre message a bien été envoyé !");
      },
      (error) => {
        console.error("Erreur lors de l'envoi :", error);
        setStatus("Une erreur est survenue, veuillez réessayer.");
      }
    );

    // Réinitialiser le formulaire après l'envoi
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2 className="form-title">Contactez-moi</h2>
        
        <div className="form-group">
          <label className="form-label">Nom</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-input" 
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-input" 
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="form-textarea" 
            rows="4"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="form-button">
          Envoyer
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
};

export default Form;
