import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => (
  <div className="about-bg">
    <section className="about-hero">
      <h1 className="about-title">About Us</h1>
    </section>
    <section className="about-main">
      <div className="about-mission-vision">
        <div className="about-block">
          <h2>Mission.</h2>
          <p>Support Western brands in making swift, cost-effective market entry, ensuring sustainable success in healthcare, education, and hospitality across the Middle East.</p>
        </div>
        <div className="about-block">
          <h2>Vision.</h2>
          <p>Elevate construction standards in the Middle East by opening doors for Western companies, driving innovation, sustainability, and enhanced customer experiences across the healthcare, education, and hospitality sectors.</p>
        </div>
      </div>
      <div className="about-story">
        <div className="about-block">
          <h2>How it all started with our founder...</h2>
          <p>With over a decade of experience in sales and strategic marketing tailored to the Middle Eastern market, Mohamed has effectively steered major building materials corporations in their expansion across the Middle East and Africa.<br/><br/>
          Throughout his experience, he saw that Western companies frequently have trouble getting the attention of trustworthy local dealers who grasp their business needs and are ready to invest for sustainable growth. This issue drove him to start FitOut Trade.<br/><br/>
          At FitOut Trade, we create the foundation for Western brands to establish a strong local presence, attracting key building materials dealers to strategically partner with them.</p>
        </div>
      </div>
      <div className="about-contact-map">
        <div className="about-contact">
          <h2>We stay close to our customers</h2>
          <p>FitOut Trade FZ<br/>
          In5 Design<br/>
          Dubai Design District<br/>
          Dubai, United Arab Emirates<br/>
          Email: Contact@fitouttrade.com<br/>
          Mobile: +971 5 898 19019</p>
        </div>
        <div className="about-map">
          <img src="/images/about-map.png" alt="Fitout Trade Map" style={{ width: '100%', borderRadius: '1rem' }} />
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs; 