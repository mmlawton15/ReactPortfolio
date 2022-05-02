import React, {useEffect} from 'react';
import personalLogo from '../../assets/cover/PersonalLogoPNG.png'
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav({currentPage, handlePageChange}) {
    return (
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





        // <header className='flex-row px-1'>
        //     <h2>
        //         <a href='/'> <img src={personalLogo} alt="personal logo" className='logo'/></a>
        //     </h2>
        //     <nav>
        //         <ul className='flex-row'>
        //             <li className={`mx-2`}>
        //                 <a href='../pages/About.js' onClick={() => setContactSelected(true)}>About</a>
        //             </li>
        //             <li className={`mx-2`}>
        //                 <a href='#resume' onClick={() => setContactSelected(true)}>Resume</a>
        //             </li>
        //             <li className={`mx-2`}>
        //                 <a href='#portfolio' onClick={() => setContactSelected(true)}>Portfolio</a>
        //             </li>
        //             <li className={`mx-2`}>
        //                 <a href='#contact' onClick={() => setContactSelected(true)}>Contact</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    );
}

export default Nav;