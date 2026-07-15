import { Link } from'react-router-dom';
import footerimage from '../../../public/footerimage1.jpeg';
function Footer(){
    const year = new Date().getFullYear();
    return(        
        <footer>
            <div>
            <p>&copy;{ year } Nirtya by Bhavithra Ganesh.All rights reserved.</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/class">Class</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            
            <a
                href="https://www.youtube.com/@bharathanatyam9772/featured"
                target="_blank" >
                    Youtube
            </a>
            </nav>
            <div >
                <img src={footerimage} alt="Dancer BW" width="100" />
            </div>
            
                </div>
            
        </footer>
      
    );
}
export default Footer;