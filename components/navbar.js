import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>LUFFY <span>Tours & Travels</span></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/OurTours">Our Tours</Link> </li>
                <li><Link to="/Enquiry">Enquiry</Link> </li>
                <li><Link to="/SignIn">Sign in</Link> </li>
            </ul>
        </div>
    );
}

export default Navbar;