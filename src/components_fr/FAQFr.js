import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ_fr = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqs = [
    {
      question: 'Quel est le meilleur supplément pour la croissance musculaire?',
      answer: 'La Protéine Whey est l\'un des meilleurs suppléments pour la croissance musculaire car elle fournit des acides aminés essentiels qui aident à la réparation et à la croissance musculaire.'
    },
    {
      question: 'Comment puis-je améliorer mes performances d\'entraînement?',
      answer: 'Utiliser des suppléments comme la Créatine peut améliorer vos performances d\'entraînement en augmentant votre force et votre puissance pendant les entraînements à haute intensité.'
    },
    {
      question: 'Quel équipement me faut-il pour les entraînements à domicile?',
      answer: 'Pour les entraînements à domicile, des équipements comme les haltères, les kettlebells et un tapis de yoga sont essentiels pour effectuer une variété d\'exercices de manière efficace.'
    },
    {
      question: 'Les compléments alimentaires sont-ils sûrs?',
      answer: 'Oui, les compléments alimentaires sont sûrs lorsqu\'ils sont pris selon les recommandations. Il est important de suivre les instructions de dosage et de consulter un professionnel de la santé si vous avez des préoccupations de santé.'
    }
  ];

  return (
    <section className="faq">
      <h2>FAQ - Foire aux questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span>{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ_fr;
