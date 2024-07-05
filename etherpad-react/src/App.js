import React from 'react';
import GetPads from './components/padApi/getPads/GetPads';
import CreatePad from './components/padApi/createPads/CreatePad';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a class="navbar-brand" href="#">PAD MANAGER</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/create" className='nav-link'>Crear Pad</Link>
          </li>
        </ul>
      </div>
    </nav>
      <div>
        <nav>
              
        </nav>

        <Routes>
          <Route path="/" element={<GetPads />} />
          <Route path="/create" element={<CreatePad />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;