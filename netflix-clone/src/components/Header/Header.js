import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className="hamburger_menu" onClick={toggleMenu}>
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className='left_container'>
                    <img className='icon' src={logo} width={100} alt='Netflix-logo' />
                    <div className='header_left'>
                        <ul>
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>My List</li>
                            <li>Browse by Languages</li>
                        </ul>
                    </div>
                </div>
                
               
                <div className='header_right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
</div>
            </div>
            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className="mobile_menu">
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
