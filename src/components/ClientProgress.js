import React from 'react';
import '../styles/ClientProgress.css';

function ClientProgress() {
  const clients = [
    {
      name: 'Alex Martin',
      comment: 'SuppliesPro helped me reach my muscle-building goals with their high-quality supplements.',
      image: `${process.env.PUBLIC_URL}/images/alex-progress.jpg`, 
      progress: 'Weight lifted: 200kg to 240kg'
    },
    {
      name: 'Julie Dupont',
      comment: 'Thanks to SuppliesPro equipment, I was able to train effectively at home.',
      image: `${process.env.PUBLIC_URL}/images/julie-progress.jpg`, 
      progress: 'Improved endurance: 20min to 45min cardio'
    },
    {
      name: 'John Doe',
      comment: 'The protein supplements from SuppliesPro made a huge difference in my training.',
      image: `${process.env.PUBLIC_URL}/images/john-progress.jpg`,
      progress: 'Muscle mass increased by 10kg'
    },
    {
      name: 'Emma Smith',
      comment: 'I love the variety of equipment offered by SuppliesPro. It keeps my workouts interesting.',
      image: `${process.env.PUBLIC_URL}/images/emma-progress.jpg`,
      progress: 'Lost 5kg in 3 months'
    },
    {
      name: 'Chris Johnson',
      comment: 'SuppliesPro’s creatine supplement boosted my strength significantly.',
      image: `${process.env.PUBLIC_URL}/images/chris-progress.jpg`,
      progress: 'Bench press improved from 100kg to 120kg'
    },
    {
      name: 'Sarah Lee',
      comment: 'Their customer service is fantastic. They helped me choose the right products for my goals.',
      image: `${process.env.PUBLIC_URL}/images/sarah-progress.jpg`,
      progress: 'Increased running speed by 15%'
    }
  ];

  return (
    <div className="client-progress">
      <h1>Our Clients' Progress</h1>
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

export default ClientProgress;
