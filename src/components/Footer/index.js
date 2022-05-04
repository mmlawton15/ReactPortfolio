import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div id="wavecontainer" className="wavecontainer">
                <div className="slogan">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                        <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(120, 205, 215, 0.9)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(68, 161, 160, 0.9)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(36, 123, 123, 0.9)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(13, 92, 99, 0.9)" />
                        </g>
                    </svg>
                </div>
                <div className="content flex">
                    <p>Portfolio created with React, HTML, JS and CSS</p>
                </div>
            </div>
        </footer>
    );
}