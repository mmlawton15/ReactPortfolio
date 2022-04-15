import React, {useState} from 'react'
import Modal from '../Modal';
import sheetShow from '../../assets/largeImages/sheet-show.png';
import pwGenerator from '../../assets/largeImages/pwGenerator.png';
import WorkdayScheduler from '../../assets/largeImages/workdayscheduler.png';
import noteTaker from '../../assets/largeImages/notetaker.png';
import budgetTracker from '../../assets/largeImages/budgetTrackerPWA.png';
import weatherDashboard from '../../assets/largeImages/weatherdashboard.png';
import regex from '../../assets/largeImages/regex.png';
import ecommerce from '../../assets/largeImages/ecommercemakeshift.png';
import readme from '../../assets/largeImages/readmeGenerator.png';
import socialNetwork from '../../assets/largeImages/socialnetwork.png';
import employees from '../../assets/largeImages/employeetrackermakeshift.png';
import codequiz from '../../assets/largeImages/codequiz.png';
import gasguru from '../../assets/largeImages/gasguru.png';
import horiseon from '../../assets/largeImages/horiseon.jpg';
import calendari from '../../assets/largeImages/calendariHomeGif.gif';

const PhotoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
    
    const [photos] = useState([
        {
            name: "Calendari",
            category: "frontend",
            path: calendari,
            descripton: "Our final group project, a scheduling application that is designed to be user-friendly and clean. Applicable to any business type"
        },
        {
            name:"The Sheet Show",
            category:"frontend",
            path: sheetShow,
            description:"Group Project where I focused primarily on CSS Styling, Initial Model Structure, and API Routes."
        },
        {
            name:"Password Generator",
            category:"fullstack",
            path:pwGenerator,
            description:"Application that creates a randomly generated password based on user's requested criteria. I created the backend logic for generating the password."
        },
        {
            name:"Workday Scheduler",
            category:"fullstack",
            path:WorkdayScheduler,
            description:"An app to help schedule your workday. I developed the HTML, CSS, and Javascript to handle the color changes, local storage, and task persistence.  We used Moment.js to work with the time, and jQuery to create the dynamic colored elements."
        },
        {
            name:"Note Taker",
            category:"backend",
            path:noteTaker,
            description:"An app to remember important notes digitally. I used Express.js for the backend to save and retrieve notes from a JSON file."
        },
        {
            name:"Budget Tracker",
            category:"backend",
            path:budgetTracker,
            description:"An app for tracking your transactions that persists offline. This is a PWA that I used IndexedDB to add offline functionality, then when the app went back online it logged the transactions you created. I use Express.js and a service worker to hold the tasks while offline, and MongoDB as the database for all the transactions. "
        },
        {
            name:"Weather Dashboard",
            category:"fullstack",
            path:weatherDashboard,
            description:"An application to track the weather in a specific city. I used a server-side API for retrieving weather data, and used localStorage for data persistence"
        },
        {
            name:"Regex Tutorital",
            category:"backend",
            path:regex,
            description:"A tutorial I created to explain how to use Regex in coding. I recroded a video to walk through the different kinds of Regular Expressions and explain their uses for validating user input."
        },
        {
            name:"E-Commerce Backend",
            category:"backend",
            path:ecommerce,
            description:"An app for a store's inventory tracking. I was provided with a working Express.js API and configured it to use Sequelize and interact with a MySQL database."
        },
        {
            name:"README Generator",
            category:"backend",
            path:readme,
            description:"I created a command-line application for generating a README.md file based on user input. I used Node.js to invoke the application and Inquirer to record user input in preparation for generating the file."
        },
        {
            name:"Social Network API",
            category:"backend",
            path:socialNetwork,
            description:"I built an API for a social network web application where users can share their thoughts, react to their friends thoughts, add/delete friends, and add/delete thoughts. I used a MongoDB database, Express.js for routin, and the Mongoose Object Data Modeling (ODM) library "
        },
        {
            name:"Employee Database",
            category:"backend",
            path:employees,
            description:"I created a Content Management System (CMS) application for someone to access the employees at their company and their information. I used Node.js to initialize the application, Inquirer to take and record user input, and a MySQL database to create this back-end project."
        },
        {
            name:"Code Quiz",
            category:"fullstack",
            path:codequiz,
            description:"The Code Quiz is an application I created that runs in the browser, and quizzes the user with a pre-defined set of questions and multiple choice ansewrs. I used HTML, CSS, Javascript, and a web API to dynamically generate the CSS and HTML. "
        },
        {
            name:"Gas Guru",
            category:"fullstack",
            path:gasguru,
            description:"Our first gruop project was Gas Guru, an applicatoin that lets the user search by zipcode for the cheapest gas. We used 2 server-side APIs to gather the prices of gas and the weather, used modals, client-side storage to store persistent data, and a new CSS framework. I was responsible for the basic app functionality and ability to respond to user input, as well as the weather API we used."
        },
        {
            name:"Horiseon",
            category:"frontend",
            path:horiseon,
            description:"I refactored a pre-existing application to make it fully funcitonal. This included fixing the links, making sure the icons and images appeared correctly, adding accesssibility features, and adding the name of the page to the website tab."
        }
    ])

    const currentPhotos = photos;
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                    src={image.path}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                  />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;