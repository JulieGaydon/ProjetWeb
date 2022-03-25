import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logout from './Logout';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Message from './Message';
import FormAddMessage from './FormAddMessage';
import ListeMessage from './ListeMessage';
import PagePrincipale from './PagePrincipale';
import Profil from './Profil';
import * as serviceWorker from './serviceWorker';
import MurDeTweets from './MurDeTweets';

// ReactDOM.render(<PagePrincipale/>, document.getElementById('root'));
//  ReactDOM.render(<Profil/>, document.getElementById('root'));
//  ReactDOM.render(<Message/>, document.getElementById('root'));
//  ReactDOM.render(<ListeMessage/>, document.getElementById('root'));
 ReactDOM.render(<MurDeTweets/>, document.getElementById('root'));
//  ReactDOM.render(<Connexion />, document.getElementById('root'));
//ReactDOM.render(<Inscription />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
