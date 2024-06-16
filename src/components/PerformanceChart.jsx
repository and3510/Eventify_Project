import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar instead of Line

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TbBackground } from 'react-icons/tb';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); //

const PerformanceChart = () => {


  const storedUsuario = localStorage.getItem('remover');
  const jsonData = JSON.parse(storedUsuario);
  const dadosObject = jsonData.removido;
  const erro = dadosObject.erro;

  console.log(erro);

  const salvos = {
    salvo: erro,
  }

  localStorage.setItem(`salvo`, JSON.stringify({salvos}));

  
  const storedSalvos = localStorage.getItem('salvo');
  const jsonSalvo = JSON.parse(storedSalvos);
  const dadosSalvo = jsonSalvo.salvos;
  const salvo = dadosSalvo.salvo;

  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Número de inscrições',
        data: [erro+salvo],
        borderColor: 'red',
        fill: false,
        backgroundColor: 'red',
        
      },
      {
        label: 'Perdidos de participação',
        data: [5],
        borderColor: 'blue',
        fill: false,
        backgroundColor: 'blue',
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
