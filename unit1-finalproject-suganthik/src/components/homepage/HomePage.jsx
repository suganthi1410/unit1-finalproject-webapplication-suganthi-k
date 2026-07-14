import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.jpeg'
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="banner">
                <img src={banner} alt="Dancer and Natarajar" className="banner-image" />
                <div className="banner-text">
                    <h4>Embrace the Rhythm and Experience the grace and power of Bharathanatym</h4>
                </div>
            </section>
            <section className="about-bharatham">
                <h3>About Bharathanatyam</h3>
                <p>
                    Bharatanatyam is one of India's oldest classical dance forms, known for
                    its elegance, precision, and expressive storytelling.
                    Bharatanatyam has three core elements:
                    Nritta : Pure dance movements focused on rhythm and technique, without storytelling.
                    Nritya : Expressive dance using facial expressions, gestures, and body language to convey emotion.
                    Natya  : Dramatic storytelling that combines movement, expression, and narrative.
                </p>
                <h2>Welcome</h2>
                <p>
                    Welcome to Nritya by ___name___ , a space where tradition meets grace.
                    We celebrate the beauty of Bharatanatyam, guiding every student to
                    grow with confidence, devotion, and joy.
                </p>
            </section>

        </div>
    );
}
export default HomePage;