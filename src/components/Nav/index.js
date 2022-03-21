import React from 'react';
import personalLogo from '../../assets/largeImages/PersonalLogoPNG.png'
import {capitalizeFirstLetter} from '../../utils/helpers';

const categories = [
    {
        name: 'portfolio',
        description: 'My professional portfolio.'
    },
    {
        name: 'contact',
        description: "Let's chat!"
    },
    {
        name: 'resume',
        description: 'My technical resume'
    }
]

function Nav() {
    const categories = [
        {name: 'Portfolio', description: 'My professional portfolio.'},
        {name: 'Contact', description: "Let's chat!"},
        {name: 'Resume', description: 'My technical resume'}
    ];
    const handleClick = () => {
        console.log('click handled');
    }
    return (
        <header data-testid='header' className='flex-row px-1'>
            <h2>
                <a data-testid='link' href='/'>
                    <span role='img' aria-label='personalLogo'>{personalLogo}</span> Portfolio 
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid='about' href='#about' onClick={() => handleClick()}>About</a>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            <span onClick={() => {handleClick()}} > {capitalizeFirstLetter(category.name)}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;