'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SemiPieChart({  title }) {
  // Parse your query data here to extract chart data
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: title,
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
}