import './Footer.css';
import facebook from '../../Images/icon-facebook.svg';
import twitter from '../../Images/icon-twitter.svg';
import pinterest from '../../Images/icon-pinterest.svg';
import instagram from '../../Images/icon-instagram.svg';

const Footer = () => {

    return ( 
        <div className="footer">
            <footer className="attribution">
                <h5 className="ftr-logo">Shortly</h5>
                <div className="other">
                <ul>
                    <li>Features
                    <ul>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                    </li>
                    <li>Resources
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    </li>
                    <li>Company
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="socials">
                <a href="#"><img src={facebook} alt="icon-facebook"/></a>
                <a href="#"><img src={twitter} alt="icon-twitter"/></a>
                <a href="#"><img src={pinterest} alt="icon-pinterest"/></a>
                <a href="#"><img src={instagram} alt="icon-instagram"/></a>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;