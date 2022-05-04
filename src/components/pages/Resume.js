import React from 'react';
import linkedin from '../../assets/cover/linkedinIcon.png'
import github from '../../assets/cover/githubIcon.png'
import resume from '../../assets/cover/resumeIcon.png'

export default function Resume() {
    return (
        <div>
            <div id="resume" className="resume">
                <h1>Resume</h1>
                <p>Hello! Please see my LinkedIn, GitHub, and downloadable resume link below. If you'd like to get in touch, you can also reach me via email at mmlawton15@gmail.com.</p>
            </div>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/mary-margaret-lawton/" target="_blank" rel="noreferrer" class="icons"><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/mmlawton15" target="_blank" rel="noreferrer" class="icons"><img src={github} alt="github"/></a>
                <a href="https://docs.google.com/document/d/1AH-W95myh3BevboaYS--pzukXlYgdykR_W1z7b-yLGw/edit?usp=sharing" target="_blank" rel="noreferrer" class="icons"><img src={resume} alt="resume"/></a>
            </div>
        </div>
    )
}