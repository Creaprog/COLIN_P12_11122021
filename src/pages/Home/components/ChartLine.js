import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './ChartLine.css';
import useCallUser from '../../../services/useCallUser';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
      labels: {
        color: "white",
      },
      fontColor: "white",
    },
    title: {
      color : "white",
      display: true,
      text: 'Durée moyenne des sessions',
    },
  },
};

const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function ChartLine() {
  const [req] = useCallUser("http://localhost:4000/user/18/average-sessions");
  if (req && req.sessions) {
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: req.sessions.map(e => e.sessionLength),
          borderColor: 'white',
          backgroundColor: 'white',
        },
      ],
    };
    return <div className="line"><Line options={options} data={data} /></div>;
  }
  return <div>Chargement...</div>
}

export default ChartLine;