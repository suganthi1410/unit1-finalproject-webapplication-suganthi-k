import { Link } from 'react-router-dom';
import banner from '../../assets/images/salangai1.jpeg'
import dancer1 from '../../assets/images/dancer1.jpeg'
import './AboutPage.css';

function AboutPage() {
  return (
    <main className="about-page">

      <h2 className="about-title">ABOUT US</h2>

      <section className="about-layout">
        <div className="about-image-box">
          <img src={banner} alt="salangai" className="banner-image" />
        </div>

        <div className="about-content-box">
          <h3 className="about-heading">Nirtya - A Space for Grace & Tradition</h3>
          <p className="about-text">
            Nirtya is a Bharatanatyam school built on devotion, discipline, and the joy 
            of movement. Our classes help students explore the beauty of classical dance 
            while developing confidence, strength, and expressive storytelling.
          </p>
          <p className="about-text">
            We believe Bharatanatyam is not just a dance form, it is a journey of 
            culture, rhythm, and inner growth. Every student is guided with patience, 
            care, and deep respect for tradition.
          </p>
        </div>
      </section>

      <h3 className="about-title">About the Teacher</h3>

      <section className="about-layout">
        <div className="about-image-box">
          <img 
            src={dancer1} alt="salangai" className="banner-image" 
            alt="Bharatanatyam Teacher"
            className="dancer-image"
          />
        </div>

        <div className="about-content-box">
          <h3 className="about-heading">A Journey Rooted in Passion</h3>
          <p className="about-text">
            Our Guru began her Bharatanatyam journey at a young age, learning under 
            dedicated masters who shaped her foundation in rhythm, expression, and 
            discipline. Over the years, she has performed, taught, and lived the art 
            with devotion.
          </p>
          <p className="about-text">
            Her teaching style blends traditional techniques with modern clarity, 
            ensuring that every student from beginner to advanced feels supported and 
            inspired.
          </p>
          <p className="about-text">
            Through Nirtya, she hopes to pass on the grace, strength, and spiritual 
            essence of Bharatanatyam to the next generation.
          </p>
        </div>
      </section>

      <div className="about-buttons">
        <Link to="/class">
          <button className="about-link-button">View Class Details</button>
        </Link>

        <Link to="/contact">
          <button className="about-link-button">Contact Us</button>
        </Link>
      </div>

    </main>
  );
}

export default AboutPage;
