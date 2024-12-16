import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Seleccione la Simulación</h1>
      <button onClick={() => navigate('/serie')}>Simulación en Serie</button>
      <button onClick={() => navigate('/paralelo')}>Simulación en Paralelo</button>
    </div>
  );
};

export default Home;