import React, { useEffect } from 'react';

const ClienteParalelo = ({ nombre, tiempoServicio, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`${nombre} termina el servicio`);
      onComplete();
    }, tiempoServicio);
    return () => clearTimeout(timer);
  }, [nombre, tiempoServicio, onComplete]);

  return <div>{nombre} está siendo atendido...</div>;
};

export default ClienteParalelo;