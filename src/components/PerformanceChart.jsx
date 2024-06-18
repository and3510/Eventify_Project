import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar instead of Line

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); //

const PerformanceChart = () => {


  const valor = localStorage.getItem(`remover`)

  const jsonData = JSON.parse(valor);
  const dadosObject = jsonData.removido;
  let error = dadosObject.erro; 

  if (error >= 1) {
    
    localStorage.removeItem('inscritos')

  }
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'perdidos aceitos',
        data: [error],
        borderColor: 'red',
        fill: false,
        backgroundColor: 'red',
        
      },
      {
        label: 'Perdidos de participação',
        data: [3-error],
        borderColor: 'blue',
        fill: false,
        backgroundColor: 'blue',
      },
      {
        label: 'total',
        data: [3],
        borderColor: 'green',
        fill: false,
        backgroundColor: 'green',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Desempenho do Evento',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
