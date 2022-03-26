import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/smallImages/groupProject2.jpg"

function Portfolio(props) {
    const currentCategory ={
        name: "frontEnd",
        description: "Projects I focused primarily on the front-end"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div classNamee="flex-row">
                <img src={photo} alt="Front End Example" className="img-thumbnail mx-1"/>
            </div>
        </section>
    );
}

export default Portfolio;