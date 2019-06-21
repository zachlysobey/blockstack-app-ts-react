import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { UserSession, AppConfig } from 'blockstack';

const appConfig = new AppConfig(['store_write', 'publish_data'])
const userSession = new UserSession({ appConfig });

const isUserSignedIn = userSession.isUserSignedIn()
const isSignInPending = userSession.isSignInPending()

if (!isUserSignedIn && isSignInPending) {
    userSession.handlePendingSignIn()
        .then((userData) => {
            if (!userData.username) {
                throw new Error('This app requires a username.')
            }
            window.location.href = `/kingdom/${userData.username}`
        })
}

const app = <App userSession={userSession} />;

const $root = document.getElementById('root');

ReactDOM.render(app, $root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
