import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsisH, faBan, faBarsProgress, faComment } from '@fortawesome/free-solid-svg-icons';
import StatusEnum from '../statusEnum';
import RiskLevelsEnum from '../riskLevelsEnum';

const KycReport = ({ report }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case StatusEnum[1]:
                return <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginRight: '5px' }} />;
            case StatusEnum[2]:
                return <FontAwesomeIcon icon={faBan} style={{ color: 'green', marginRight: '5px' }} />;
            case StatusEnum[4]:
                return <FontAwesomeIcon icon={faComment} style={{ color: 'green', marginRight: '5px' }} />;
            case StatusEnum[5]:
                    return <FontAwesomeIcon icon={faBarsProgress} style={{ color: 'green', marginRight: '5px' }} />;
            case StatusEnum[6]:
            case StatusEnum[7]:
                return <FontAwesomeIcon icon={faEllipsisH} style={{ marginRight: '5px' }} />;
            default:
                return null;
        }
    };

    const getRiskScoreClass = (riskScore) => {
        switch (riskScore) {
            case RiskLevelsEnum.LOW:
                return 'low';
            case RiskLevelsEnum.MEDIUM:
                return 'medium';
            case RiskLevelsEnum.HIGH:
                return 'high';
            default:
                return '';
        }
    };

    return (
        <tr>
            <td>{new Date(report.created).toLocaleString()}</td>
            <td>{report.name}</td>
            <td>{report.type}</td>
            <td>
                <span className={`risk-score ${getRiskScoreClass(report.riskScore)}`}>
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
