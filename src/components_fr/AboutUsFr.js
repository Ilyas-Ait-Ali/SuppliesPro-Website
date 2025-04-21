import React from 'react';
import '../styles/AboutUs.css';

function AboutUs_fr() {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-content">
          <h1>À propos de SuppliesPro</h1>
          <p>Votre partenaire en fitness et bien-être</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/about-hero.jpg`} alt="À propos de SuppliesPro" />
        </div>
      </section>

      <section className="about-history">
        <h2>Notre Histoire</h2>
        <p>SuppliesPro a été fondée en 2019 avec pour mission d'aider les gens à s'entraîner à domicile, surtout pendant les périodes difficiles de la pandémie de COVID-19. Notre objectif était de fournir des équipements de fitness et des suppléments de haute qualité pour aider les individus à rester en forme et en bonne santé tout en restant chez eux.</p>
        <p>Depuis notre création, nous sommes devenus une marque de confiance dans l'industrie du fitness, connue pour notre engagement envers la qualité, l'innovation et la satisfaction de nos clients.</p>
      </section>

      <section className="about-mission">
        <h2>Notre Mission</h2>
        <p>Chez SuppliesPro, notre mission est de permettre aux individus d'atteindre leurs objectifs de fitness en fournissant des produits de première qualité et un service client exceptionnel. Nous croyons que le fitness et le bien-être devraient être accessibles à tous, quel que soit leur emplacement ou leurs circonstances.</p>
      </section>

      <section className="about-values">
        <h2>Nos Valeurs</h2>
        <ul>
          <li><strong>Qualité :</strong> Nous nous engageons à fournir les produits de la plus haute qualité à nos clients.</li>
          <li><strong>Innovation :</strong> Nous nous efforçons continuellement d'innover et d'améliorer notre offre de produits.</li>
          <li><strong>Satisfaction du Client :</strong> Nos clients sont au cœur de tout ce que nous faisons, et leur satisfaction est notre priorité absolue.</li>
          <li><strong>Accessibilité :</strong> Nous croyons que le fitness devrait être accessible à tous, et nous travaillons dur pour rendre nos produits abordables et disponibles pour tous.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Rencontrez Notre Équipe</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/1.png`} alt="Membre de l'équipe 1" />
            <h3>John Doe</h3>
            <p>Fondateur & CEO</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/3.png`} alt="Membre de l'équipe 2" />
            <h3>Patrick Smith</h3>
            <p>Directeur des Opérations</p>
          </div>
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/6.png`} alt="Membre de l'équipe 3" />
            <h3>Jack Johnson</h3>
            <p>Chef du Marketing</p>
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <h2>Nos Réalisations</h2>
        <ul>
          <li>Fidèle à plus de 10 000 clients dans le monde entier</li>
          <li>Lauréat du prix de la meilleure marque de fitness en 2021</li>
          <li>Plus de 100 produits de fitness innovants développés</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs_fr;
