import React, { useEffect, useState } from 'react';
import KycReport from './KycReport';
import PieChart from './PieChart';
import { fetchApplications } from '../apiService';
import StatusEnum from '../statusEnum';
import RiskLevelsEnum from '../riskLevelsEnum';

const Dashboard = () => {
    const [data, setData] = useState({
        approved: 0,
        rejected: 0,
        cancelled: 0,
        readyForReview: 0,
        inProgress: 0,
        customerProcessing: 0,
        userAcceptedKYCInvitation: 0,
        pending: 0,
        verified: 0,
        unverified: 0,
        completed: 0,
        unknown: 0
    });
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const getApplications = async () => {
            try {
                const response = await fetchApplications();

                const applications = response.items || [];
                const mappedReports = applications.map(app => {
                    let riskScore = RiskLevelsEnum.NOT_CALCULATED;
                    if (app.riskScoring?.results?.length > 0) {
                        const totalScores = app.riskScoring.results.map(result => result.total);
                        const averageScore = totalScores.reduce((acc, score) => acc + score, 0) / totalScores.length;
                        if (averageScore < 30) {
                            riskScore = RiskLevelsEnum.LOW;
                        } else if (averageScore >= 30 && averageScore < 70) {
                            riskScore = RiskLevelsEnum.MEDIUM;
                        } else {
                            riskScore = RiskLevelsEnum.HIGH;
                        }
                    }
                    return {
                        created: app.createdAt,
                        name: app.attributes.fullName || 'N/A',
                        type: app.type,
                        riskScore: riskScore,
                        status: Object.values(StatusEnum).find(key => key === app.statusName) || StatusEnum.UNKNOWN
                    };
                });

                setReports(mappedReports);

                const statusCounts = mappedReports.reduce((acc, app) => {
                    acc[app.status.toLowerCase().replace(/\s+/g, '')]++;
                    return acc;
                }, {
                    approved: 0,
                    rejected: 0,
                    cancelled: 0,
                    readyforreview: 0,
                    inprogress: 0,
                    customerprocessing: 0,
                    useracceptedkycinvitation: 0,
                    pending: 0,
                    verified: 0,
                    unverified: 0,
                    completed: 0,
                    unknown: 0
                });
                
                setData({
                    approved: statusCounts.approved,
                    rejected: statusCounts.rejected,
                    cancelled: statusCounts.cancelled,
                    readyForReview: statusCounts.readyforreview,
                    inProgress: statusCounts.inprogress,
                    customerProcessing: statusCounts.customerprocessing,
                    userAcceptedKYCInvitation: statusCounts.useracceptedkycinvitation,
                    pending: statusCounts.pending,
                    verified: statusCounts.verified,
                    unverified: statusCounts.unverified,
                    completed: statusCounts.completed,
                    unknown: statusCounts.unknown
                });
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        getApplications();
    }, []);

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
