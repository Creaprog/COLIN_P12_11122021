import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import useCallUser from '../../../services/useCallUser';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ChartRadar() {
    const [req] = useCallUser("http://localhost:4000/user/12/performance");
    if (req && req.data) {
        const data = {
            labels: ['Cardio', 'Energy', 'Endurance', 'Strength', 'Speed', 'Intensity'],
            datasets: [
              {
                label: '# of Votes',
                data: req.data.map(e => e.value),
                backgroundColor: '#FF0101',
                borderColor: '#FF0101',
                borderWidth: 1,
              },
            ],
          };
        return <Radar data={data} />;
    }
    return <div>Chargement...</div>
}

export default ChartRadar;