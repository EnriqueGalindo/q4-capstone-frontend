import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import PropPassingRoute from '../../components/PropPassingRoute'

import ApiProvider from '../ApiProvider';
import EncounterList from '../EncounterList';
import Encounter from '../Encounter';
import EncounterCreator from '../EncounterCreator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ApiProvider>
            <PropPassingRoute 
              exact path="/"
              component={EncounterList}
            />
            <PropPassingRoute 
              exact path={['/create', '/create/:id']}
              component={EncounterCreator}
            />
            <PropPassingRoute 
              exact path="/encounter"
              component={Encounter}
            />
          </ApiProvider>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
