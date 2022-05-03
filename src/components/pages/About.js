import React from 'react';
import mmVenice from '../../assets/cover/PinkPrismProf.jpg'

export default function About() {
    return (
        <div className="About">
            <div className="MM-facts">
                <h1>Mary Margaret, MnM, MML...</h1>
                <img src={mmVenice} alt="mm in venice, italy"/>
                <p>
                    The list goes on. I will be impressed if you can come up with a new nickname! In my free time, I like to hangout with friends and family. 
                    The majority of my free time is occupied by those around me. 
                    When I have time for myself, I love reading the classics (The Count of Monte Christo remains my favorite) and thinking that I'm a great cook.
                    My loved ones are always the first to try these concoctions, much to their dismay.
                </p>
                <p>
                    I am always up for an adventure, and have been fortunate enough to spend time in different cities across the states, as well as abroad. 
                    My favorite places to visit are NYC, Florence, IT, and Palm Beach, FL. 
                </p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="MM-facts">
            <h2>Professional Interests</h2>
                <p>I studied AP Computer Science in high school, and Graphic Design in college. I have recently revisited this industry, 
                    and completed a 6-month bootcamp
                    from UNCC. I am currently looking for the below as my next career move:</p>
                <ul>
                    <li>Full Stack Developer with a focus on front-end design</li>
                    <li>UI/UX Developer</li>
                    <li>Front End Web Developer</li>
                </ul>
                <p> Other technology fields that interest me are Cyber Security, Artificial Intelligence, 
                    Green Tech, and Machine Learning. I am an optimistic and inquisitive student, 
                    and can't wait to see what my future holds in technology.</p>
            </div>
            
        </div>
        
    )
}