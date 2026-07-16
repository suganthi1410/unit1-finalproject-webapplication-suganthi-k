import { Link } from'react-router-dom';
import footerimage from '../../../public/footer.jpeg';
function Footer(){
    const year = new Date().getFullYear();
    return(        
        <footer className="footer">
            <div className="footer-left">
                <p className="footer-title">QUICK LINKS</p>            
            <nav className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/class">Class</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                 </nav>
            <div className="youtube-link" >
            <a href="https://www.youtube.com/@bharathanatyam9772/featured"
                target="_blank"  > Youtube
            </a>
            </div>
             <p className="copyright">
           &copy; {year} Nirtya by Bhavithra Ganesh. All rights reserved.
        </p>
            </div>
            <div className="footer-right" >
                <img src={footerimage} alt="Natarajar BW" width="300" />
            </div>

               
            
        </footer>
      
    );
}
export default Footer;