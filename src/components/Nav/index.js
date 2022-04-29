import React, {useEffect} from 'react';
import personalLogo from '../../assets/cover/PersonalLogoPNG.png'
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {
    const {
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
                    <li className={`mx-2`}>
                        <a href='../pages/About.js' onClick={() => setContactSelected(true)}>About</a>
                    </li>
                    <li className={`mx-2`}>
                        <a href='#resume' onClick={() => setContactSelected(true)}>Resume</a>
                    </li>
                    <li className={`mx-2`}>
                        <a href='#portfolio' onClick={() => setContactSelected(true)}>Portfolio</a>
                    </li>
                    <li className={`mx-2`}>
                        <a href='#contact' onClick={() => setContactSelected(true)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;