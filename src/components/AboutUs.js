import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About SuppliesPro</h1>
          <p>Your Partner in Fitness and Wellness</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/about-hero.jpg`} alt="About SuppliesPro" />
        </div>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>SuppliesPro was founded in 2019 with the mission to help people workout at home, especially during the challenging times of the COVID-19 pandemic. Our goal was to provide high-quality fitness equipment and supplements that could help individuals stay fit and healthy while staying at home.</p>
        <p>Since our inception, we have grown to become a trusted brand in the fitness industry, known for our commitment to quality, innovation, and customer satisfaction.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>At SuppliesPro, our mission is to empower individuals to achieve their fitness goals by providing top-notch products and exceptional customer service. We believe that fitness and wellness should be accessible to everyone, regardless of their location or circumstances.</p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We are committed to providing the highest quality products to our customers.</li>
          <li><strong>Innovation:</strong> We continuously strive to innovate and improve our product offerings.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and their satisfaction is our top priority.</li>
          <li><strong>Accessibility:</strong> We believe that fitness should be accessible to everyone, and we work hard to make our products affordable and available to all.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/1.png`} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/3.png`} alt="Team Member 2" />
            <h3>Patrick Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
          <img src={`${process.env.PUBLIC_URL}/images/6.png`} alt="Team Member 3" />
            <h3>Jack Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <h2>Our Achievements</h2>
        <ul>
          <li>Trusted by over 10,000 customers worldwide</li>
          <li>Recipient of the Best Fitness Brand award in 2021</li>
          <li>Over 100 innovative fitness products developed</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;