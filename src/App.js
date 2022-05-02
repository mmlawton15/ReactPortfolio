//The root component of the app that houses all the other components
import React, { useState } from 'react';
import './App.css';

//PAGES
import Nav from './components/Nav/index.js';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
    if (currentPage === 'Contact') {
      return <Contact/>;
    }
  }

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={setCurrentPage}></Nav>
      {renderPage()}
    </div>
  );
}