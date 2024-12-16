import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SimulacionSerie = () => {
  const [resultados, setResultados] = useState(null);

  const ejecutarSimulacionCompleta = () => {
    const nuevosClientes = [];
    const tiemposServidor1 = [];
    const tiemposServidor2 = [];
    let tiempoTotal = 0;

    for (let i = 1; i <= 10; i++) {
      const nuevoCliente = `Cliente ${i}`;
      nuevosClientes.push(nuevoCliente);
      const tiempoCajero = Math.floor(Math.random() * 5000) + 1000; // Tiempo aleatorio entre 1s y 6s
      const tiempoAsesor = Math.floor(Math.random() * 5000) + 1000; // Tiempo aleatorio entre 1s y 6s
      tiemposServidor1.push(tiempoCajero);
      tiemposServidor2.push(tiempoAsesor);
      tiempoTotal += tiempoCajero + tiempoAsesor;
    }

    setResultados({
      totalClientes: nuevosClientes.length,
      tiempoTotal,
      tiemposServidor1,
      tiemposServidor2,
    });
  };

  const data = {
    labels: resultados ? resultados.tiemposServidor1.map((_, i) => `Cliente ${i + 1}`) : [],
    datasets: [
      {
        label: 'Servidor 1',
        data: resultados ? resultados.tiemposServidor1.map(t => t / 1000) : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Servidor 2',
        data: resultados ? resultados.tiemposServidor2.map(t => t / 1000) : [],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Simulación de Servidores en Serie</Typography>
      <Button variant="contained" color="primary" onClick={ejecutarSimulacionCompleta}>Ejecutar Simulación Completa</Button>
      {resultados && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Resultados de la Simulación</Typography>
          <Typography>Total de clientes atendidos: {resultados.totalClientes}</Typography>
          <Typography>Tiempo total de atención: {(resultados.tiempoTotal / 1000).toFixed(1)} segundos</Typography>
          <Line data={data} />
        </Box>
      )}
    </Box>
  );
};

export default SimulacionSerie;