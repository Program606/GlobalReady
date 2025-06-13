import React from 'react';
import '../css/Opportunities.css';

function CompaniesList({ companies, onViewMap, onSaveCompany }) {
  return (
    <div className="opportunities-companies">
      <div className="companies-header">
        <div className="companies-title">Companies</div>
        <button className="favorites-btn">❤ Favorites</button>
      </div>
      <div className="companies-list">
        {companies.map((company, idx) => (
          <div key={idx} className="company-card">
            <div className="company-name">{company.name}</div>
            <div className="company-address">{company.address}</div>
            <div className="company-actions">
              <button className="map-btn" onClick={() => onViewMap(company)}>View on Map</button>
              <button className="save-btn" onClick={() => onSaveCompany(company)}>Save Company</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesList; 