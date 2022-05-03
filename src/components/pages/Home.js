import React from 'react';
import mmUSC from '../../assets/cover/usc-pic.jpg'

export default function Home() {

    return (
        <section>
            <div className="home-section">
                <div id="home">
                <h1>Nice to meet you, I'm Mary Margaret</h1>
                <p>Hi! Thank you for visiting my page. Welcome to my portfolio, 
                    where you will find a bit about me, my work, and what I am looking for moving forward.</p>
                </div>
                <img src={mmUSC} alt="mm at usc"/>
            </div>
        </section>
    )
}