import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Número de inscrições',
        data: [10, 20, 30, 40, 50, 60],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Taxa de participação',
        data: [15, 25, 35, 45, 55, 65],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Feedback dos participantes',
        data: [5, 15, 25, 35, 45, 55],
        borderColor: 'green',
        fill: false,
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

  return <Line data={data} options={options} />;
};

export default PerformanceChart;
