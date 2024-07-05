import React from 'react';
import GetPads from './getPads/GetPads';
import CreatePad from './createPads/CreatePad';

const App = () => {
  return (
    <div className="App">
      <GetPads />
      <CreatePad/>
    </div>
  );
};

export default App;