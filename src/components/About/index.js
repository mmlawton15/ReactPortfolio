//ABOUT COMPONENT
import React from 'react';
import coverImage from '../../assets/cover/usc-pic.jpg';

function About() {
    return(
        <section className="my-5">
            <h1 id='about'>Hi!</h1>
            <img src={coverImage} className='my-2' style={{width: '100%'}} alt='cover' />
            <div className='my-2'>
                <p>My name is Mary Margaret, thank you for visiting my page. Welcome to my portfolio, where you will find a bit about me, my work, and my contact information.</p>
                <br></br>
                <h2>Mary Margaret, MM, MML...</h2>
                    <p>The list goes on. I will be impressed if you can come up with a new nickname! In my free time, I like to hangout with friends and family. The majority of my free time is occupied by those around me. When I have time for myself, I love reading the classics (The Count of Monte Christo remains my favorite) and thinking that I'm a great cook. My loved ones are always the first to try these concoctions, much to their dismay.</p>
                    <br></br>
                    <p>I am always up for an adventure, and have been fortunate enough to spend time in different cities across the states, as well as abroad. My favorite places to visit are NYC, Florence, IT, and Palm Beach, FL.</p>
                <br></br>
                <h2>Professional Interests</h2>
                <p>I studied Graphic Design in college and loved seeing my ideas come to life. Since graduation I've been in the staffing industry, which really opened my eyes to all kinds of different industries. I took AP computer science through high school, and recently decided to revist this field. I have really enjoyed learning during this bootcamp, and can't wait to marry my background in Graphic Design with Full Stack Development. Other technology fields that interest me are Cyber Security, Artificial Intelligence, Green Tech, and Machine Learning.</p>
                <br></br>
                <p>I am an optimistic and inquisitive student, and can't wait to see what my future holds in technology.</p>
            </div>
        </section>
    );
}

export default About;