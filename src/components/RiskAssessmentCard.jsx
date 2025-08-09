import React from 'react';
import '../css/Opportunities.css';

function RiskAssessmentCard({ currencyRisk, economicRisk, socialRisk, governanceRisk, commercialRisk, overallRisk }) {
  return (
    <div className="risk-card">
      <div className="risk-title">Country Risk Assessment</div>
      <div className="risk-flex">
        <div className="risk-col">
          <div className="risk-label">CURRENCY RISK</div>
          <div className="risk-value risk-yellow">{currencyRisk}%</div>
          <div className="risk-label">SOCIAL RISK</div>
          <div className="risk-value risk-red">{socialRisk}%</div>
          <div className="risk-label">COMMERCIAL RISK</div>
          <div className="risk-value risk-orange">{commercialRisk}%</div>
          <div className="risk-label">OVERALL RISK</div>
          <div className="risk-value risk-orange">{overallRisk}%</div>
        </div>
        <div className="risk-col">
          <div className="risk-label">ECONOMIC RISK</div>
          <div className="risk-value risk-green">{economicRisk}%</div>
          <div className="risk-label">GOVERNANCE RISK</div>
          <div className="risk-value risk-orange">{governanceRisk}%</div>
        </div>
      </div>
    </div>
  );
}

export default RiskAssessmentCard; 