import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
function Header(){
    return(
        <header
         style={{
        padding: "5px",
        borderBottom: "6px solid #d22828"
      }}
         >
            <div
             style={{
          display: "flex",
          alignItems: "center",
          gap: "15px" }}
            >
<img src={logo} alt="Nirtya LOGO" width="100" />
<h1 >Nirtya by Teacher's Name</h1>

            </div>        
<nav
style={{
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    gap: "30px"
}}
>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/class">Class</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/contact">Contact</Link>
</nav>

    </header>
    );
    
};
export default Header;
