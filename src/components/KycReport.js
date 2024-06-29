// src/components/KycReport.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const KycReport = ({ report }) => {
    const getStatusIcon = (status) => {
        if (status === 'Approved') {
            return <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginRight: '5px' }} />;
        } else if (status === 'Customer Processing' || status === 'User Accepted KYC Invitation') {
            return <FontAwesomeIcon icon={faEllipsisH} style={{ marginRight: '5px' }} />;
        }
        return null;
    };

    return (
        <tr>
            <td>{report.created}</td>
            <td>{report.name}</td>
            <td>{report.type}</td>
            <td>
                <span className={`risk-score ${report.riskScore === 'LOW' ? 'low' : ''}`}>
                    {report.riskScore}
                </span>
            </td>
            <td>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {getStatusIcon(report.status)}
                    {report.status}
                </span>
            </td>
        </tr>
    );
};

export default KycReport;
