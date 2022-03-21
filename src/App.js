//The root component of the app that houses all the other components
import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
