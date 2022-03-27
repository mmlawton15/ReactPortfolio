import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio({currentCategory}) {
    const {name, description} = currentCategory;
    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList/>
        </section>
    );
}

export default Portfolio;