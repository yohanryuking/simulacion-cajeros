import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SimulacionSerie from './SimulacionSerie';
import SimulacionParalelo from './SimulacionParalelo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serie" element={<SimulacionSerie />} />
          <Route path="/paralelo" element={<SimulacionParalelo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;