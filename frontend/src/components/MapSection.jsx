import React, { useState, useEffect } from 'react';
import "../css/MapSection.css";
import '../css/CompanySection.css';
import GoogleMapComponent from './GoogleMap.jsx';

const categoryOptions = [
  { text: "Select Industry", key: "none" },
  { text: "Agriculture", key: "Agriculture" },
  { text: "Business and Personal Services", key: "Business and Personal Services" },
  { text: "Construction, Manufacturing", key: "Construction, Manufacturing" },
  { text: "Mining, Oil and Gas", key: "Mining, Oil and Gas" },
  { text: "Municipal Government, Education and Health", key: "Municipal Government, Education and Health" },
  { text: "Provinical Government", key: "Provinical Government" },
  { text: "Retail and Wholesale", key: "Retail and Wholesale" },
  { text: "Transportation", key: "Transportation" },
  { text: "Technology", key: "Technology" }
];
const countryOptions = [
  { name: "Africa", items: ["Nigeria", "Kenya", "South Africa", "Egypt"] },
  { name: "Europe", items: ["Germany", "France", "Italy", "Spain"] },
  { name: "Latin America", items: [] },
];

function MapSection() {
  const [selectedIndustry, setSelectedIndustry] = useState('none');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [riskAssessments, setRiskAssessments] = useState({});
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('savedOpportunities');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  // Fetch risk assessment for selected countries
//   useEffect(() => {
//     async function fetchRisk() {
//       let newRisks = {};
//       for (const country of selectedCountries) {
//         try {
//           const response = await fetch('http://127.0.0.1:5000/get_risk_assessment', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ country_code: country, country_name: country })
//           });
//           if (response.ok) {
//             const data = await response.json();
//             newRisks[country] = data;
//           }
//         } catch (e) {
//           newRisks[country] = { error: 'Failed to fetch' };
//         }
//       }
//       setRiskAssessments(newRisks);
//     }
//     if (selectedCountries.length > 0) fetchRisk();
//     else setRiskAssessments({});
//   }, [selectedCountries]);

  // Save to favorites
  function saveToFavorites(company) {
    if (!favorites.some(fav => fav.name === company.name)) {
      const newFavs = [...favorites, company];
      setFavorites(newFavs);
      localStorage.setItem('savedOpportunities', JSON.stringify(newFavs));
    }
  }
  // Remove from favorites
  function removeFromFavorites(name) {
    const newFavs = favorites.filter(fav => fav.name !== name);
    setFavorites(newFavs);
    localStorage.setItem('savedOpportunities', JSON.stringify(newFavs));
  }

  // Example: fetch companies (dummy, replace with real API if needed)
  useEffect(() => {
    if (selectedCountries.length > 0 && selectedIndustry !== 'none') {
      // Simulate fetching companies for selected countries and industry
      const dummyCompanies = selectedCountries.map((country, idx) => ({
        name: `${selectedIndustry} Company ${idx + 1} in ${country}`,
        address: `Address in ${country}`,
        coordinates: { lat: 9 + idx, lng: 8 + idx },
        country,
        industry: selectedIndustry
      }));
      setCompanies(dummyCompanies);
    } else {
      setCompanies([]);
    }
  }, [selectedCountries, selectedIndustry]);

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-form">
          <span className="map-title">Global Opportunities</span>
          <label htmlFor="industry" className="map-label">Select Industry</label>
          <select id="industry" className="map-select" value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)}>
            {categoryOptions.map(item => (
              <option key={item.key} value={item.key}>{item.text}</option>
            ))}
          </select>
          <label htmlFor="region" className="map-label">Select Region</label>
          <select id="region" className="map-select" value={selectedRegion} onChange={e => {
            setSelectedRegion(e.target.value);
            setSelectedCountries([]);
          }}>
            <option value="">-- Choose a Region --</option>
            {countryOptions.map(option => (
              <option key={option.name} value={option.name}>{option.name}</option>
            ))}
          </select>
          {selectedRegion && (
            <div style={{ margin: '10px 0' }}>
              <label className="block font-semibold text-blue-800 mb-2">Select Countries</label>
              <div className="grid grid-cols-2 gap-2 border p-3 rounded bg-gray-50 max-h-64 overflow-y-auto">
                {countryOptions.find(opt => opt.name === selectedRegion)?.items.map(country => (
                  <label key={country} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="countryCheckbox"
                      value={country}
                      checked={selectedCountries.includes(country)}
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedCountries([...selectedCountries, country]);
                        } else {
                          setSelectedCountries(selectedCountries.filter(c => c !== country));
                        }
                      }}
                    />
                    <span>{country}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          <GoogleMapComponent companies={companies} />
        </div>
        <div className="company-section">
          <div className="company-header">
            <h3>Companies</h3>
            <button className="favorites-btn" onClick={() => setShowFavoritesModal(true)}><span className="fav-icon">&#9825;</span> Favorites</button>
          </div>
          <div className="company-container">
            {companies.map(company => (
              <div key={company.name} className="company-card">
                <div className="company-name">{company.name}</div>
                <div className="company-address">{company.address}</div>
                <div className="company-actions">
                  <button className="map-btn">View on Map</button>
                  <button className="save-btn" onClick={() => saveToFavorites(company)}>
                    {favorites.some(fav => fav.name === company.name) ? "Saved" : "Save Company"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Favorites Modal - OUTSIDE main container */}
      {showFavoritesModal && (
        <div className="modal-overlay" onClick={() => setShowFavoritesModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowFavoritesModal(false)}>Close</button>
            <h4>Favorites</h4>
            {favorites.length === 0 && <div>No saved companies yet.</div>}
            {favorites.map(fav => (
              <div key={fav.name} className="company-card">
                <div className="company-name">{fav.name}</div>
                <div className="company-address">{fav.address}</div>
                <div className="company-actions">
                  <button className="remove-btn" onClick={() => removeFromFavorites(fav.name)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default MapSection;