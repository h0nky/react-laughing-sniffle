import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from "./components/MainPage";
import './index.css';

const App = () => {
  return (
    <div className="app__container">
      <header className="app__header">
      </header>
      <MainPage />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
