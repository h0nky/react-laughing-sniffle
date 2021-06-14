import React from 'react';
import ReactDOM from 'react-dom';
import { Context, Provider } from "./store/contextProvider";
import MainPage from "./components/MainPage";
import { APP_TITLE } from './constants';
import './index.css';

const App = () => (
  <Provider>
    <div className="app__container">
      <header className="app__header">
        <h1>{APP_TITLE}</h1>
      </header>
      <Context.Consumer>
        {(context: any) => <MainPage {...context} />}
      </Context.Consumer>
    </div>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
