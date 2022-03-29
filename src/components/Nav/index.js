import React, {useEffect} from 'react';
import personalLogo from '../../assets/largeImages/PersonalLogoPNG.png'
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href='/'> <img src={personalLogo} alt="personal logo" className='logo'/></a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href='#about' onClick={() => setContactSelected(false)}>About</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href='#resume' onClick={() => setContactSelected(false)}>Resume</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href='#portfolio' onClick={() => setContactSelected(false)}>Portfolio</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;