import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAppleAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FAQ from './FAQFr'; 
import '../styles/HomePage.css';

function HomePage_fr() {
  const testimonials = [
    "La protéine whey de SuppliesPro m'a aidé à atteindre mon objectif physique.",
    "La qualité des équipements sportifs de SuppliesPro est exceptionnelle.",
    "Le service client de SuppliesPro est excellent, fortement recommandé !"
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFlipped, setIsFlipped] = useState({ supplements: false, equipments: false });
  const [isProductFlipped, setIsProductFlipped] = useState({ proteinWhey: false, creatine: false, dumbbells: false, jumpRope: false });

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleFlip = (category) => {
    setIsFlipped((prevState) => ({ ...prevState, [category]: !prevState[category] }));
  };

  const handleProductFlip = (product) => {
    setIsProductFlipped((prevState) => ({ ...prevState, [product]: !prevState[product] }));
  };

  return (
    <div className="homepage">
      {/* Section Héro */}
      <section className="hero">
        <div className="hero-content">
          <h1>Embarkez dans votre prochaine aventure !</h1>
          <p>Rejoignez-nous dès aujourd'hui !</p>
          <p>Chez SuppliesPro, nous offrons une large gamme de produits de haute qualité pour soutenir votre parcours de fitness. Des compléments alimentaires aux équipements sportifs, nous avons tout ce dont vous avez besoin pour atteindre vos objectifs.</p>
          <p>Nos produits sont conçus pour vous aider à améliorer vos performances, renforcer votre santé et rester motivé. Découvrez la différence avec SuppliesPro et passez au niveau supérieur.</p>
          <a href="#categories" className="hero-button">
            <button>Découvrez nos produits</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/Adventure.jpg`} alt="Aventure" />
        </div>
      </section>

      {/* Témoignages */}
      <section className="testimonials">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonial-slider">
          <button onClick={prevTestimonial}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="testimonial">
            <p>{testimonials[currentTestimonial]}</p>
          </div>
          <button onClick={nextTestimonial}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === currentTestimonial ? 'active' : ''}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Catégories de Produits */}
      <section id="categories" className="product-categories">
        <h2>Nos catégories de produits</h2>
        <div className="categories">
          <div className="category-wrapper">
            <div className={`category ${isFlipped.supplements ? 'flipped' : ''}`} onClick={() => handleFlip('supplements')}>
              <div className="front">
                <FontAwesomeIcon icon={faAppleAlt} size="3x" />
              </div>
              <div className="back">
                <p>Trouvez les meilleurs compléments pour améliorer vos performances et votre santé.</p>
              </div>
            </div>
            <Link to="/fr/food-supplements" className="category-button">Compléments</Link>
          </div>
          <div className="category-wrapper">
            <div className={`category ${isFlipped.equipments ? 'flipped' : ''}`} onClick={() => handleFlip('equipments')}>
              <div className="front">
                <FontAwesomeIcon icon={faDumbbell} size="3x" />
              </div>
              <div className="back">
                <p>Découvrez notre gamme d'équipements sportifs de haute qualité.</p>
              </div>
            </div>
            <Link to="/fr/sports-equipments" className="category-button">Équipements</Link>
          </div>
        </div>
      </section>

      {/* Produits les plus vendus */}
      <section className="best-selling-products">
        <h2>Produits les plus vendus</h2>
        <div className="products">
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.proteinWhey ? 'flipped' : ''}`} onClick={() => handleProductFlip('proteinWhey')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/protein-whey.jpg`} alt="Protéine Whey" />
              </div>
              <div className="back">
                <p>Protéine whey de haute qualité pour la croissance musculaire et la récupération.</p>
              </div>
            </div>
            <Link to="/fr/food-supplements" className="product-button">Protéine Whey</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.creatine ? 'flipped' : ''}`} onClick={() => handleProductFlip('creatine')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/creatine.jpg`} alt="Créatine" />
              </div>
              <div className="back">
                <p>Créatine pour améliorer vos performances d'entraînement.</p>
              </div>
            </div>
            <Link to="/fr/food-supplements" className="product-button">Créatine</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.dumbbells ? 'flipped' : ''}`} onClick={() => handleProductFlip('dumbbells')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/dumbbells.jpg`} alt="Haltères" />
              </div>
              <div className="back">
                <p>Haltères durables pour l'entraînement de force.</p>
              </div>
            </div>
            <Link to="/fr/sports-equipments" className="product-button">Haltères</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.jumpRope ? 'flipped' : ''}`} onClick={() => handleProductFlip('jumpRope')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/jump-rope.jpg`} alt="Corde à Sauter" />
              </div>
              <div className="back">
                <p>Corde à sauter de haute qualité pour les entraînements cardio.</p>
              </div>
            </div>
            <Link to="/fr/sports-equipments" className="product-button">Corde à Sauter</Link>
          </div>
        </div>
      </section>

      {/* Articles détaillés */}
      <section className="detailed-articles">
        <h2>Article détaillé</h2>
        <div className="articles">
          <div className="article">
            <div className="article-content">
              <h3>Compléments alimentaires</h3>
              <p>
                - Améliorez vos performances<br />
                Les compléments alimentaires peuvent jouer un rôle crucial dans l'amélioration des performances athlétiques. Les compléments tels que les poudres de protéines, la créatine et les BCAA aident à la récupération musculaire, à la croissance et à la production d'énergie. Pour les athlètes engagés dans un entraînement intensif, ces compléments peuvent faire la différence entre un bon entraînement et un entraînement exceptionnel.<br /><br />
                - Soutenez votre santé globale<br />
                Au-delà des performances, les compléments alimentaires contribuent à la santé globale. Les vitamines et minéraux comblent les lacunes nutritionnelles de votre alimentation, soutenant la fonction immunitaire, la santé des os et les niveaux d'énergie. Les acides gras oméga-3, par exemple, sont connus pour réduire l'inflammation et promouvoir la santé cardiaque.<br /><br />
                - Pratiques et efficaces<br />
                Les compléments alimentaires offrent un moyen pratique de répondre à vos besoins nutritionnels. Que vous ayez un mode de vie chargé ou des restrictions alimentaires spécifiques, les compléments assurent que vous recevez les nutriments essentiels nécessaires à une santé et des performances optimales.
              </p>
            </div>
            <div className="article-image">
              <img src={`${process.env.PUBLIC_URL}/images/dietary-supplements.jpg`} alt="Compléments alimentaires" />
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src={`${process.env.PUBLIC_URL}/images/home-sports-equipment.jpg`} alt="Équipement sportif à domicile" />
            </div>
            <div className="article-content">
              <h3>Équipement sportif à domicile</h3>
              <p>
                - Commodité et flexibilité<br />
                Investir dans l'équipement sportif à domicile offre une commodité inégalée. Vous pouvez vous entraîner à tout moment sans vous soucier des horaires de gym ou des trajets. Cette flexibilité permet de maintenir une routine d'entraînement plus cohérente, ce qui est essentiel pour atteindre vos objectifs de fitness.<br /><br />
                - Rentabilité<br />
                Bien que l'investissement initial dans l'équipement sportif à domicile puisse sembler élevé, il est rentable à long terme. Les abonnements mensuels aux gymnases s'additionnent, alors que l'achat d'équipement pour une utilisation à domicile peut être une dépense unique. Au fil du temps, cela peut entraîner des économies importantes.<br /><br />
                - Environnement d'entraînement personnalisé<br />
                Créer une salle de sport à domicile vous permet de personnaliser votre environnement d'entraînement en fonction de vos préférences. Vous pouvez choisir l'équipement qui convient le mieux à votre style d'entraînement, que ce soit la musculation, le cardio ou le yoga. Cet espace personnalisé peut renforcer votre motivation et votre engagement envers l'exercice régulier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <FAQ />
    </div>
  );
}

export default HomePage_fr;
