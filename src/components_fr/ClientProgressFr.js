import React from 'react';
import '../styles/ClientProgress.css';

function ClientProgress_fr() {
  const clients = [
    {
      name: 'Alex Martin',
      comment: 'SuppliesPro m\'a aidé à atteindre mes objectifs de musculation avec leurs compléments de haute qualité.',
      image: `${process.env.PUBLIC_URL}/images/alex-progress.jpg`, 
      progress: 'Poids soulevé: 200kg à 240kg'
    },
    {
      name: 'Julie Dupont',
      comment: 'Grâce à l\'équipement de SuppliesPro, j\'ai pu m\'entraîner efficacement à la maison.',
      image: `${process.env.PUBLIC_URL}/images/julie-progress.jpg`, 
      progress: 'Endurance améliorée: 20min à 45min de cardio'
    },
    {
      name: 'John Doe',
      comment: 'Les compléments protéinés de SuppliesPro ont fait une énorme différence dans mon entraînement.',
      image: `${process.env.PUBLIC_URL}/images/john-progress.jpg`,
      progress: 'Masse musculaire augmentée de 10kg'
    },
    {
      name: 'Emma Smith',
      comment: 'J\'adore la variété d\'équipements offerts par SuppliesPro. Cela rend mes entraînements intéressants.',
      image: `${process.env.PUBLIC_URL}/images/emma-progress.jpg`,
      progress: 'Perte de 5kg en 3 mois'
    },
    {
      name: 'Chris Johnson',
      comment: 'Le supplément de créatine de SuppliesPro a considérablement augmenté ma force.',
      image: `${process.env.PUBLIC_URL}/images/chris-progress.jpg`,
      progress: 'Amélioration du développé couché de 100kg à 120kg'
    },
    {
      name: 'Sarah Lee',
      comment: 'Leur service client est fantastique. Ils m\'ont aidé à choisir les bons produits pour mes objectifs.',
      image: `${process.env.PUBLIC_URL}/images/sarah-progress.jpg`,
      progress: 'Augmentation de la vitesse de course de 15%'
    }
  ];

  return (
    <div className="client-progress">
      <h1>Les Progrès de Nos Clients</h1>
      <div className="clients">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <h2>{client.name}</h2>
            <p>{client.comment}</p>
            <div className="images">
              <img src={client.image} alt={`${client.name} progress`} />
            </div>
            <p>{client.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientProgress_fr;
