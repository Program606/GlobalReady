import React from 'react';
import '../css/Opportunities.css';

function OpportunitiesFilters({
  industries,
  regions,
  countries,
  selectedIndustry,
  selectedRegion,
  selectedCountries,
  onIndustryChange,
  onRegionChange,
  onCountryChange
}) {
  return (
    <div className="opportunities-filters">
      <div className="opportunities-title">Global Opportunities</div>
      <div className="filter-label">Select Industry</div>
      <select value={selectedIndustry} onChange={e => onIndustryChange(e.target.value)} className="filter-select">
        {industries.map(ind => <option key={ind}>{ind}</option>)}
      </select>
      <div className="filter-label">Select Region</div>
      <select value={selectedRegion} onChange={e => onRegionChange(e.target.value)} className="filter-select">
        {regions.map(reg => <option key={reg}>{reg}</option>)}
      </select>
      <div className="filter-label">Select Countries</div>
      <div className="filter-countries">
        {countries.map(country => (
          <label key={country} className="country-checkbox">
            <input
              type="checkbox"
              checked={selectedCountries.includes(country)}
              onChange={() => onCountryChange(country)}
              style={{ accentColor: '#2854d9' }}
            />
            {country}
          </label>
        ))}
      </div>
    </div>
  );
}

export default OpportunitiesFilters; 