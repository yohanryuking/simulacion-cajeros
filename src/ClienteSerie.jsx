import React, { useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ClienteSerie = ({ nombre, tiempoCajero, tiempoAsesor, onComplete }) => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      console.log(`${nombre} termina en el cajero`);
      const timer2 = setTimeout(() => {
        console.log(`${nombre} termina en el asesor financiero`);
        onComplete();
      }, tiempoAsesor);
      return () => clearTimeout(timer2);
    }, tiempoCajero);
    return () => clearTimeout(timer1);
  }, [nombre, tiempoCajero, tiempoAsesor, onComplete]);

  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 1 }}>
      <Typography variant="h6">{nombre} está siendo atendido...</Typography>
    </Paper>
  );
};

export default ClienteSerie;