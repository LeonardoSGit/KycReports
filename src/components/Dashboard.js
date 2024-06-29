// src/components/Dashboard.js
import React from 'react';
import KycReport from './KycReport';
import PieChart from './PieChart';

const Dashboard = () => {
    const data = {
        approved: 11,
        rejected: 1,
        cancelled: 1,
        readyForReview: 10,
        inProgress: 54
    };

    const reports = [
        { created: 'May 15, 2024 14:12:27', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' },
        { created: 'May 15, 2024 14:09:28', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'Not calculated', status: 'Customer Processing' },
        { created: 'May 03, 2024 08:57:14', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' },
        { created: 'May 03, 2024 08:39:35', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' },
        { created: 'May 03, 2024 08:29:24', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' },
        { created: 'May 01, 2024 10:05:06', name: 'sdasjd', type: 'aliascar2', riskScore: 'Not calculated', status: 'User Accepted KYC Invitation' },
        { created: 'Mar 22, 2024 09:57:47', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' },
        { created: 'Mar 22, 2024 08:53:16', name: 'KÁROLY-EDWARD RÁCZ', type: 'aliascar2', riskScore: 'LOW', status: 'Approved' }
    ];

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <h2>KYC Application Reports</h2>
            <PieChart data={data} />
            <table>
                <thead>
                    <tr>
                        <th>Created</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Risk Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <KycReport key={index} report={report} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
