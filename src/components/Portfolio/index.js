//PORTFOLIO COMPONENT
import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
    const {currentCategory} = props;
    return (
        <section className='my-5'>
            <h1 id="portfolio">Portfolio</h1>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Portfolio;