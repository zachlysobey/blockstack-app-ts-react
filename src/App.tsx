import React from 'react'
import { UserSession } from 'blockstack'
import { Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'

import './App.css';

import { SignedIn } from './SignedIn';
import { Landing } from './Landing';

interface Props {
  userSession: UserSession
}
const App: React.FC<Props> = ({
  userSession
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learning Blockstack!</p>
        <PrivateRoute
          userSession={userSession}
          path="/"
          component={SignedIn}
        />
        <Route
          path="/landing/"
          component={Landing}
        />
      </header>
    </div>
  );
}

export default App;
