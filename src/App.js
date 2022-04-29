//The root component of the app that houses all the other components
import React, { useState } from 'react';
import './App.css';

//PAGES
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

//IMAGES


function App() {
  const [categories] = useState([
    {name:'MM Portfolio'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

    </div>
  );
}

export default App;