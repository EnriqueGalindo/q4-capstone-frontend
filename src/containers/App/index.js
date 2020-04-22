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
import NotFound from '../404';
import ServersOnFire from '../500';
import ServerNuke from '../ServerNuke';
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
              exact path="/encounter/:id"
              component={Encounter}
            />
            <PropPassingRoute 
              exact path='/404'
              component={NotFound}
            />
            <PropPassingRoute 
              exact path='/500'
              component={ServersOnFire}
            />
            <PropPassingRoute 
              exact path='/nuke'
              component={ServerNuke}
            />
          </ApiProvider>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
