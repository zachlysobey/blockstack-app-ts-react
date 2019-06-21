import React from 'react';
import { UserSession } from 'blockstack';

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
        {
          userSession.isUserSignedIn()
            ? <SignedIn name={'World'}/>
            : <Landing userSession={userSession}/>
          }
      </header>
    </div>
  );
}

export default App;
