import './Header.css';
import Img1 from '../../Images/logo.svg';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);

    return ( 
        <div className="header">
            <header>
                <img src={Img1} alt="logo" />
                <nav className={`nav-menu ${showMenu ? 'drop-menu' : ''}`} id='Menu'>
                    <ul>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Resources</a></li>
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