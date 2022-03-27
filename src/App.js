//The root component of the app that houses all the other components
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    {name:'Frontend', description: 'Projects where I primarily focused on the front-end.'},
    {name: 'Backend', description: 'Projects where I primarily focused on the back-end'},
    {name: 'Fullstack', description: 'Full Stack applications I created and worked on'}
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