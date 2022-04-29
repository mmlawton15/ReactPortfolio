import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Nav() {
  return (
    <header className="nav-header">
      <div>
        <Link to='/'>
          <img className="mm-logo" alt="logo"></img>
        </Link>
        <Link to="/">
          <span className="brandNameSlogan">
            <h2 className="brandName" alt="mmhome">MM Portfolio</h2>
          </span>
        </Link>
      </div>
    </header>
  )
}

reportWebVitals();
