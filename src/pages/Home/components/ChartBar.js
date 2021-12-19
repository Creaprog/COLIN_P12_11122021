import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ChartBar.css';
import useCallUser from '../../../services/useCallUser';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      align: 'start',
      text: 'Activité quotidienne',
      position: 'top',
      color : "#20253A",
      padding: {
        top: 10,
        bottom: 0,
      },
      font: {
        size: 15,
        weight: 'bold'
      },
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7'];

const ChartBar = () => {
  const [req] = useCallUser("http://localhost:4000/user/12/activity");
  if (req && req.sessions) {
    const data = {
      labels,
      datasets: [
        {
          label: 'Poids (kg)',
          data: req.sessions.map(e => e.kilogram),
          backgroundColor: '#282D30',
        },
        {
          label: 'Calories brûlées (kCal)',
          data: req.sessions.map(e => e.calories),
          backgroundColor: '#E60000',
        },
      ],
    };
    return <div className="bar"><Bar options={options} data={data} height="320" width="735" /></div>
  }
  return <div>Chargement...</div>
}

export default ChartBar;