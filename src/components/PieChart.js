import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Approved', 'Rejected', 'Cancelled', 'Ready For Review', 'In Progress'],
        datasets: [
            {
                data: [data.approved, data.rejected, data.cancelled, data.readyForReview, data.inProgress],
                backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#ffeb3b', '#2196f3'],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
