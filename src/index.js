import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import Nav from './components/Nav';
// import About from './components/pages/About';
// import Portfolio from './components/pages/Portfolio';
// import Resume from './components/pages/Resume';
// import Contact from './components/pages/Contact';
// import Home from './components/pages/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App/>}/>
//       <Route path="nav" element={<Nav/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="portfolio" element={<Portfolio/>}/>
//       <Route path="resume" element={<Resume/>}/>
//       <Route path="contact" element={<Contact/>}/>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

reportWebVitals();
