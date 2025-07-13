import React from 'react';
import "../css/MapSection.css"
import '../css/CompanySection.css'

const categoryOptions = [
    { text: "Select Industry",key: "none" },
    { text: "Agriculture",key: "Agriculture" },
    { text: "Business and Personal Services",key: "Business and Personal Services" },
    { text: "Construction, Manufacturing",key: "Construction, Manufacturing" },
    { text: "Mining, Oil and Gas",key: "Mining, Oil and Gas" },
    { text: "Municipal Government, Education and Health",key: "Municipal Government, Education and Health" },
    { text: "Provinical Government",key: "Provinical Government" },
    { text: "Retail and Wholesale",key: "Retail and Wholesale" },
    { text: "Transportation",key: "Transportation" },
    { text: "Technology",key: "Technology" }
  ];  
const countryOptions =[
    {name: "--Choose a Region", items:[]},
    {name: "Africa", items:["Nigeria", "Kenya", "South Africa", "Egypt"]},
    {name: "Europe", items:["Germany", "France","Italy","Spain"]},
    {name: "Latin America", items:[]},
];

const companies = [
    {
      name: "Htsfarms - Agricultural online store, Agricultural Company in Nigeria",
      address: "Suite 519/525/527, The Kings Plaza, 308 Ahmadu Bello Wy, opposite NAF Conference Centre, Kado, Abuja 900108, Federal Capital Territory, Nigeria",
      coordinates: { lat: 9.072264, lng: 7.491302 }, // optional dummy data for map
      saved: false
    },
    {
      name: "GreenGrow Technologies - Sustainable Farming Solutions",
      address: "12 Agritech Drive, Lekki Phase 1, Lagos, Nigeria",
      coordinates: { lat: 6.4483, lng: 3.4215 },
      saved: false
    },
    {
      name: "AgroConnect Nigeria - Farm Tools and Supplies",
      address: "Plot 88, Industrial Layout, Enugu, Nigeria",
      coordinates: { lat: 6.456, lng: 7.5086 },
      saved: false
    }
  ];
  
function PopulateOptions(){
    return (
        categoryOptions.map((item) =>
            <option key={item.key} value={item.key}>{item.text}</option>
        )
    );
}
function PopulateCompanies() {
    return (
        <>
            {companies.map((company, idx) => (
            <div key={idx} className="company-card">
              <div className="company-name">{company.name}</div>
              <div className="company-address">{company.address}</div>
              <div className="company-actions">
                <button className="map-btn" >View on Map</button> 
                {/* onClick={() => onViewMap(company)} */}
                <button className="save-btn">Save Company</button>
                {/* onClick={() => onSaveCompany(company)} */}
              </div>
            </div>
          ))}
        </>
    );
}
function PopulateRegions(){
    return (
        countryOptions.map(option => 
            <option key={option.name} value={option.value}>{option.name}</option>
        )
    );
}
function MapSection(){
    function handleClick(e){
        if (e !== 'none') {
            alert(e);
        }
    }
    return(
        <section className="map-section">
        <div className="map-container">
            <div className="map-form">
                <span className="map-title">Global Opportunities</span>
                <label htmlFor="industry" className="map-label">Select Industry</label>
                <select id="industry" className="map-select" onChange={e=>{
                    handleClick(e.target.value);
                }}>
                    <PopulateOptions />
                </select>
                <label htmlFor="region" className="map-label">Select Region</label>
                <select id="region" className="map-select" onChange={e =>{
                    handleClick(e.target.value);
                }}>
                    <PopulateRegions />
                </select>
                <img src="map-sample.png" alt="Map showing global opportunities" className="map-img" />
                </div>
            <div className="company-section">
                <div className="company-header">
                    <h3>Companies</h3>
                    <button className="favorites-btn"><span className="fav-icon">&#9825;</span> Favorites</button>
                </div>
                <div className="company-container">
                    <PopulateCompanies />
                </div>
                </div>
        </div>
        </section>
    );
}

export default MapSection;