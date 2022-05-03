import React from 'react';
import personalLogo from '../../assets/cover/PersonalLogoPNG.png'

function Nav({currentPage, handlePageChange}) {
    return (
        <header className="navigation-bar">
            <nav>
                <ul>
                    <li>
                        <a 
                        href="#home" 
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                        <img src={personalLogo} alt="personal logo" className='logo'/>
                        </a>
                    </li>
                    <li>                
                        <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                    </li>
                    <li>                
                        <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                    <li>                
                        <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                    </li>
                    <li>                
                        <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;