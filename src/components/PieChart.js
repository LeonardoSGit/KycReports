import React, { useEffect } from 'react';
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
        labels: ['Approved', 'Rejected', 'Cancelled', 'Ready For Review', 'In Progress', 'Customer Processing', 'User Accepted KYC Invitation', 'Pending', 'Verified', 'Unverified', 'Completed', 'Unknown'],
        datasets: [
            {
                data: [data.approved, data.rejected, data.cancelled, data.readyForReview, data.inProgress, data.customerProcessing, data.userAcceptedKYCInvitation, data.pending, data.verified, data.unverified, data.completed, data.unknown],
                backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#ffeb3b', '#2196f3', '#8e44ad', '#3498db', '#e67e22', '#1abc9c', '#e74c3c', '#9b59b6', '#95a5a6'],
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
