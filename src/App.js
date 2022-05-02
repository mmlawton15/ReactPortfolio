//The root component of the app that houses all the other components
import React, { useState } from 'react';
import { BrowserRouter as Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';

//PAGES
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Home from './pages/Home';

//IMAGES


export default function App() {
  const [categories] = useState([
    {name:'MM Portfolio'}
  ]);

  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <main>
          <Routes>
            <Route exact path="/" element={< Home />} />
            <Route exact path="/About" element={< About />} />
            <Route exact path="/Portfolio" element={< Portfolio />} />
            <Route exact path="/Resume" element={< Resume />} />
            <Route exact path="/Contact" element={< Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}