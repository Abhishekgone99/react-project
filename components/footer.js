import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="foot">
            <ul>
                <li><Link to="">Terms & conditions</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
                <li><Link to="">About us</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Footer;