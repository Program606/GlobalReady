import React, { useState } from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import '../css/HeaderSection.css';
import '../css/Account.css';

function AccountInfoCard({ companyName, email }) {
  return (
    <div className="account-card">
      <div className="account-title">My Account</div>
      <div className="account-info-row"><b>Company Name:</b> {companyName}</div>
      <div className="account-info-row"><b>Email:</b> {email}</div>
    </div>
  );
}

function SavedAssessmentCard({ date, score, status, onDownload }) {
  return (
    <div className="account-card">
      <div className="account-section-title">Saved Readiness Assessments</div>
      <div className="account-assessment-row">
        <b>{date}</b> &ndash; <b>Score:</b> {score}% &ndash; <b>Status:</b> {status}
        <button className="account-download-btn" onClick={onDownload}>Download</button>
      </div>
    </div>
  );
}

function SavedOpportunitiesCard({ opportunities, onRemove }) {
  return (
    <div className="account-card">
      <div className="account-section-title">Saved Opportunities</div>
      <div className="account-opps-list">
        {opportunities.map((opp, idx) => (
          <div className="account-opp-item" key={idx}>
            <div className="account-opp-title">{opp.name}</div>
            <div className="account-opp-industry">{opp.industry}</div>
            <div className="account-opp-address">{opp.address}</div>
            <button className="account-opp-remove" onClick={() => onRemove(idx)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Account() {
  const [companyName] = useState('m');
  const [email] = useState('m@gmail.com');
  const [opportunities, setOpportunities] = useState([
    {
      name: 'General Industries Deutschland',
      industry: 'Manufacturing',
      address: 'Heinrich-Hertz-Straße 99, 34123 Kassel, Germany',
    },
    {
      name: 'Eni Ghana Exploration and Production Limited',
      industry: 'Mining, Oil and Gas',
      address: 'Bradley Tower Building, William Tubman Rd, Ridge, Ghana',
    },
    {
      name: 'RAM Industries SAC',
      industry: 'Manufacturing',
      address: 'Av. Alberto del Campo 411, Magdalena del Mar 15076, Peru',
    },
  ]);

  const handleRemoveOpportunity = (idx) => {
    setOpportunities(opps => opps.filter((_, i) => i !== idx));
  };

  const handleDownload = () => {
    alert('Download assessment PDF');
  };

  return (
    <div className="account-root">
      <AccountInfoCard companyName={companyName} email={email} />
      <SavedAssessmentCard
        date="March 28, 2025 (11:58 AM)"
        score={6}
        status="Not Ready"
        onDownload={handleDownload}
      />
      <SavedOpportunitiesCard
        opportunities={opportunities}
        onRemove={handleRemoveOpportunity}
      />
    </div>
  );
}

export default Account; 