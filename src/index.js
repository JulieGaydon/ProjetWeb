import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logout from './Logout';
import Login from './Login';
import Signin from './Signin';
import Message from './Message';
import PagePrincipale from './PagePrincipale';
import Utilisateur from './Utilisateur';
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(<PagePrincipale/>, document.getElementById('root'));
//  ReactDOM.render(<Signin/>, document.getElementById('root'));
//  ReactDOM.render(<Utilisateur/>, document.getElementById('root'));
//  ReactDOM.render(<Message/>, document.getElementById('root'));
// ReactDOM.render(<Login/>, document.getElementById('root'));
// ReactDOM.render(<Logout />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
