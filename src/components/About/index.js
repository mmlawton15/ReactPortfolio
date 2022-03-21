import React from 'react';
import coverImage from '../../assets/cover/usc-pic.jpg';

function About() {
    return(
        <section className="my-5">
            <h1 id='about'>Hi!</h1>
            <img src={coverImage} className='my-2' style={{width: '100%'}} alt='cover' />
        </section>
    );
}

export default About;