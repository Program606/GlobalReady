import React, { useState } from 'react';
import '../css/App.css';
import '../css/Navbar.css';
import '../css/HeroSection.css';
import '../css/AuthForm.css';
import '../css/Opportunities.css';
import RiskAssessmentCard from '../components/RiskAssessmentCard';
import OpportunitiesFilters from '../components/OpportunitiesFilters';
import CompaniesList from '../components/CompaniesList';

const industries = ['Agriculture', 'Technology', 'Manufacturing'];
const regions = ['Africa', 'Asia', 'Europe'];
const countries = [
  'Nigeria', 'South Africa', 'Egypt', 'Rwanda', 'Kenya', 'Ghana'
];

const companies = [
  {
    name: 'Htsfarms - Agricultural online store, Agricultural Company in Nigeria',
    address: 'Suite 519/525/527, The Kings Plaza, 308 Ahmadu Bello WY, opposite NAF Conference Centre, Kado, Abuja 900108, Federal Capital Territory, Nigeria',
  },
  {
    name: 'Chifam Investment Ltd.- Agricultural Company in Nigeria',
    address: 'No. 13, Ezekiel Street, Off, Toyin St, Ikeja 100271, Nigeria',
  },
];

function Opportunities() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedCountries, setSelectedCountries] = useState(['Nigeria']);

  const handleCountryChange = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  // Placeholder handlers for company actions
  const handleViewMap = (company) => {
    alert(`View on Map: ${company.name}`);
  };
  const handleSaveCompany = (company) => {
    alert(`Saved: ${company.name}`);
  };

  return (
    <div className="opportunities-root">
      <RiskAssessmentCard
        currencyRisk={57.4}
        economicRisk={30.8}
        socialRisk={74.2}
        governanceRisk={34.9}
        commercialRisk={60.0}
        overallRisk={48.0}
      />
      <div className="opportunities-flex">
        <OpportunitiesFilters
          industries={industries}
          regions={regions}
          countries={countries}
          selectedIndustry={selectedIndustry}
          selectedRegion={selectedRegion}
          selectedCountries={selectedCountries}
          onIndustryChange={setSelectedIndustry}
          onRegionChange={setSelectedRegion}
          onCountryChange={handleCountryChange}
        />
        <CompaniesList
          companies={companies}
          onViewMap={handleViewMap}
          onSaveCompany={handleSaveCompany}
        />
      </div>
    </div>
  );
}

export default Opportunities;