import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
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
      question: 'What is the best supplement for muscle growth?',
      answer: 'Protein Whey is one of the best supplements for muscle growth as it provides essential amino acids that help in muscle repair and growth.'
    },
    {
      question: 'How can I improve my workout performance?',
      answer: 'Using supplements like Creatine can enhance your workout performance by boosting your strength and power during high-intensity workouts.'
    },
    {
      question: 'What equipment do I need for home workouts?',
      answer: 'For home workouts, equipment like dumbbells, kettlebells, and a yoga mat are essential to perform a variety of exercises effectively.'
    },
    {
      question: 'Are dietary supplements safe?',
      answer: 'Yes, dietary supplements are safe when taken as recommended. It is important to follow the dosage instructions and consult with a healthcare provider if you have any health concerns.'
    }
  ];

  return (
    <section className="faq">
      <h2>FAQ - Frequently Asked Questions</h2>
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

export default FAQ;
