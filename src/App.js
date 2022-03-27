//The root component of the app that houses all the other components
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    {name:'frontEnd', description: 'Projects where I primarily focused on the front-end.'},
    {name: 'backEnd', description: 'Projects where I primarily focused on the back-end'},
    {name: 'fullStack', description: 'Full Stack applications I created and worked on'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio currentCategory={currentCategory}></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;