import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAppleAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FAQ from './FAQ'; 
import '../styles/HomePage.css';

function HomePage() {
  const testimonials = [
    "SuppliesPro protein whey helped me achieve my physical goal.",
    "The quality of the sports equipment from SuppliesPro is top-notch.",
    "Customer service at SuppliesPro is outstanding, highly recommended!"
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
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Embark on Your Next Adventure!</h1>
          <p>Join Us Today!</p>
          <p>At SuppliesPro, we offer a wide range of high-quality products to support your fitness journey. From dietary supplements to sports equipment, we have everything you need to achieve your goals.</p>
          <p>Our products are designed to help you improve your performance, enhance your health, and stay motivated. Discover the difference with SuppliesPro and take your training to the next level.</p>
          <a href="#categories" className="hero-button">
            <button>Discover our products</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/Adventure.jpg`} alt="Adventure" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
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

      {/* Product Categories */}
      <section id="categories" className="product-categories">
        <h2>Our Product Categories</h2>
        <div className="categories">
          <div className="category-wrapper">
            <div className={`category ${isFlipped.supplements ? 'flipped' : ''}`} onClick={() => handleFlip('supplements')}>
              <div className="front">
                <FontAwesomeIcon icon={faAppleAlt} size="3x" />
              </div>
              <div className="back">
                <p>Find the best supplements to boost your performance and health.</p>
              </div>
            </div>
            <Link to="/food-supplements" className="category-button">Supplements</Link>
          </div>
          <div className="category-wrapper">
            <div className={`category ${isFlipped.equipments ? 'flipped' : ''}`} onClick={() => handleFlip('equipments')}>
              <div className="front">
                <FontAwesomeIcon icon={faDumbbell} size="3x" />
              </div>
              <div className="back">
                <p>Discover our range of high-quality sports equipments.</p>
              </div>
            </div>
            <Link to="/sports-equipments" className="category-button">Equipments</Link>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="best-selling-products">
        <h2>Best Selling Products</h2>
        <div className="products">
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.proteinWhey ? 'flipped' : ''}`} onClick={() => handleProductFlip('proteinWhey')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/protein-whey.jpg`} alt="Protein Whey" />
              </div>
              <div className="back">
                <p>High-quality protein whey for muscle growth and recovery.</p>
              </div>
            </div>
            <Link to="/food-supplements" className="product-button">Protein Whey</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.creatine ? 'flipped' : ''}`} onClick={() => handleProductFlip('creatine')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/creatine.jpg`} alt="Creatine" />
              </div>
              <div className="back">
                <p>Creatine to enhance your workout performance.</p>
              </div>
            </div>
            <Link to="/food-supplements" className="product-button">Creatine</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.dumbbells ? 'flipped' : ''}`} onClick={() => handleProductFlip('dumbbells')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/dumbbells.jpg`} alt="Dumbbells" />
              </div>
              <div className="back">
                <p>Durable dumbbells for strength training.</p>
              </div>
            </div>
            <Link to="/sports-equipments" className="product-button">Dumbbells</Link>
          </div>
          <div className="product-wrapper">
            <div className={`product ${isProductFlipped.jumpRope ? 'flipped' : ''}`} onClick={() => handleProductFlip('jumpRope')}>
              <div className="front">
                <img src={`${process.env.PUBLIC_URL}/images/jump-rope.jpg`} alt="Jump Rope" />
              </div>
              <div className="back">
                <p>High-quality jump rope for cardio workouts.</p>
              </div>
            </div>
            <Link to="/sports-equipments" className="product-button">Jump Rope</Link>
          </div>
        </div>
      </section>

      {/* Detailed Articles */}
      <section className="detailed-articles">
        <h2>Detailed Article</h2>
        <div className="articles">
          <div className="article">
            <div className="article-content">
              <h3>Dietary Supplements</h3>
              <p>
                - Boost Your Performance<br />
                Dietary supplements can play a crucial role in enhancing athletic performance. Supplements such as protein powders, creatine, and BCAAs help in muscle recovery, growth, and energy production. For athletes engaged in high-intensity training, these supplements can be the difference between a good workout and an exceptional one.<br /><br />
                - Support Overall Health<br />
                Beyond performance, dietary supplements contribute to overall health. Vitamins and minerals fill nutritional gaps in your diet, supporting immune function, bone health, and energy levels. Omega-3 fatty acids, for example, are known to reduce inflammation and promote heart health.<br /><br />
                - Convenient and Efficient<br />
                Dietary supplements offer a convenient way to meet your nutritional needs. Whether you have a busy lifestyle or specific dietary restrictions, supplements ensure you receive the essential nutrients necessary for optimal health and performance.
              </p>
            </div>
            <div className="article-image">
              <img src={`${process.env.PUBLIC_URL}/images/dietary-supplements.jpg`} alt="Dietary Supplements" />
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src={`${process.env.PUBLIC_URL}/images/home-sports-equipment.jpg`} alt="Home Sports Equipment" />
            </div>
            <div className="article-content">
              <h3>Home Sports Equipment</h3>
              <p>
                - Convenience and Flexibility<br />
                Investing in home sports equipment provides unparalleled convenience. You can work out at any time without worrying about gym hours or commuting. This flexibility allows for a more consistent workout routine, which is key to achieving fitness goals.<br /><br />
                - Cost-Effective<br />
                While the initial investment in home sports equipment might seem high, it is cost-effective in the long run. Monthly gym memberships add up, whereas purchasing equipment for home use can be a one-time expense. Over time, this can lead to significant savings.<br /><br />
                - Customized Workout Environment<br />
                Creating a home gym allows you to customize your workout environment to suit your preferences. You can choose the equipment that best fits your workout style, whether it's weightlifting, cardio, or yoga. This personalized space can enhance your motivation and commitment to regular exercise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

export default HomePage;
