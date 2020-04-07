import React from 'react';
import './App.css';
import ApiProvider from '../ApiProvider';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        {/* place components here */}
      </ApiProvider>
    </div>
  );
}

export default App;
