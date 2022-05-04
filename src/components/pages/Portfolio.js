import React from 'react';
import calendari from "../../assets/projects/calendariHomeGif.gif"
import weatherdashboard from "../../assets/projects/weatherdashboard.png"
import sheetshow from "../../assets/projects/sheet-show.png"
import workdayscheduler from "../../assets/projects/workdayscheduler.png"
import notetaker from "../../assets/projects/notetaker.png"
import budgettracker from "../../assets/projects/budgetTrackerPWA.png"

export default function Portfolio() {
    return (
        <section>
            <div class="my-work-heading">
                <h1>My Work</h1>
                <p>
                    This section contains my favorite projects. These apps are fully functioning, click the images to visit the deployed application!
                </p>
            </div>
            
            <div id="worksContainer" class="cards">
                <div id="calendari" class="card">
                    <img class="card-image" src={calendari} alt="calendari application" onclick="location.href = 'https://calendari-day.herokuapp.com/';"/>
                    <div class="card-body">
                        <h3><b>Calendari</b></h3>
                        <p>Calendari is a MERN SPA PWA scheduler using GraphQL. Business Owners can log in, manage their appointments,
                            and customize their appointment types. Clients can log in and schedule any of the predefined appointments with notes for the business.</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Javascript, React, GraphQL, Node, Express, Mongoose, MongoDB, Heroku, JWT Authentication</p>
                    </div>
                </div>

                <div id="groupProjectTwo" class="card">
                    <img class="card-image" src={sheetshow} alt="sheet show application" onclick="location.href = 'https://sheet-show.herokuapp.com/';"/>
                    <div class="card-body">
                        <h3><b>The Sheet Show</b></h3>
                        <p>A full stack application that is based on creating character sheets for Dungeons and Dragons. We created a RESTful API to communicate between
                            front end and back end, and styled it using primarily CSS and a DnD</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Javascript, Node, Express, Handlebars, MySQL2, Sequelize ORM, Heroku, Bootstrap, Dotenv, Bcrypt, Connect-session-sequelize,
                            Express session, JawsDB, DnD API</p>
                    </div>
                </div>
                <div id="projectFive" class="card">
                    <img class="card-image" src={workdayscheduler} alt="the workday scheduler" onclick="location.href = 'https://mmlawton15.GitHub.io/challenge-five-disco/';"/>
                    <div class="card-body">
                        <h3><b>Work Scheduler</b></h3>
                        <p>The Work Day Scheduler functions similarly to a calendar app, it allows the user to schedule their daily tasks by the hour and reflects the current date
                            and time. The previous time is greyed out, the current time will be red, and the upcoming time will be green. This uses local storage to allow for
                            tasks to persist after the browser has been closed. Users can edit, delete and create tasks on this page</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Javascript, Third-Party APIs, Bootstrap, jQuery, Moment</p>
                    </div>
                </div>
                <div id="projectEleven" class="card">
                    <img class="card-image" src={notetaker} alt="the Notetaker app" onclick="location.href = 'https://protected-savannah-15247.herokuapp.com/notes';"/>
                    <div class="card-body">
                        <h3><b>Note Taker</b></h3>
                        <p>The Notetaker app was our challenge we used to show our skills with Express.js. It's an application that allows users to create, edit and delete
                            notes and these notes persist using a JSON database. It was designed to replace a paper notebook!</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Javascript, Node, Express, CRUD, Heroku</p>
                    </div>
                </div>
                <div id="projectNineteen" class="card">
                    <img class="card-image" src={budgettracker} alt="the budget tracker app" onclick="location.href = 'https://evening-caverns-05596.herokuapp.com';"/>
                    <div class="card-body">
                        <h3><b>Budget Tracker</b></h3>
                        <p>My first Progressive Web Applications. I handled the backend logic, more specifically the offline capabilities. If a user loses 
                            internet access, the app will log their transactions using IndexedDB. Once they regain network access, Indexed DB will load 
                            these transactions into the app.</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Javascript, Heroku, IndexedDB, Service Workers</p>
                    </div>
                </div>
                <div id="projectSix" class="card">
                    <img class="card-image" src={weatherdashboard} alt="the weather dashboard app" onclick="location.href = 'https://mmlawton15.github.io/weather-dashboard/';"/>
                    <div class="card-body">
                        <h3><b>Weather Dashboard</b></h3>
                        <p>The Weather Dashboard was our introduction to Server-Side APIs. I built a weather app, where the user can search for a city and
                            get the daily forecast, as well as the 5 day forecast.</p>
                        <h3><b>Stack</b></h3>
                        <p>HTML, CSS, Web APIs, Javascript</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>
    )
}