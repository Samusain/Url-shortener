import './Header.css';
import Img1 from '../../Images/logo.svg';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <div className="header">
            <header>
                <nav className={`nav-menu ${showMenu ? 'drop-menu' : ''}`} id='Menu'>
                    <img src={Img1} alt="logo" />
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                    <div className="logs">
                        <button className="login">Login</button>
                        <button className="register">Sign Up</button>
                    </div>
                </nav>    
            </header>
            <div className="menu-box">
                {showMenu === false ? (
                    <LuMenu 
                        id='Burger' 
                        className='burger' 
                        onClick={() => setShowMenu(true)} 
                    />
                ) : (
                    <IoClose 
                        id='Closebtn' 
                        className='closebtn' 
                        onClick={() => setShowMenu(false)} 
                    />
                )}
            </div>
        </div>
    );
}

export default Header;