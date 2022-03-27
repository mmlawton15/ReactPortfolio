import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
    const {currentCategory} = props;
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.nam)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Portfolio;