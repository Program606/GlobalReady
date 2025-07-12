import React from 'react';
import "../css/MapSection.css"

function MapSection(){
    return(
        <section className="map-section">
        <div className="map-container">
            <div className="map-form">
                <span className="map-title">Global Opportunities</span>
                <label htmlFor="industry" className="map-label">Select Industry</label>
                <select id="industry" className="map-select">
                    <option>Select Industry</option>
                    <option>Agriculture</option>
                    <option>Business and Personal Services</option>
                    <option>Construction</option>
                    <option>Manufacturing</option>
                    <option>Mining, Oil and Gas</option>
                    <option>Municipal Government, Education and Health</option>
                    <option>Provinical Government</option>
                    <option>Retail and Wholesale</option>
                    <option>Transportation</option>
                    <option>Technology</option>
                </select>
                <label htmlFor="region" className="map-label">Select Region</label>
                <select id="region" className="map-select">
                    <option>-- Choose a Region --</option>
                    <option>Africa</option>
                    <option>Europe</option>
                    <option>Latin America</option>
                </select>
                <img src="map-sample.png" alt="Map showing global opportunities" className="map-img" />
                </div>
            <div className="company-section">
                <div className="company-header">
                    <h3>Companies</h3>
                    <button className="favorites-btn"><span className="fav-icon">&#9825;</span> Favorites</button>
                </div>
                <div className="company-container">
                    <div className="company-item">
                        <h4>Htsfarms - Agricultural online store, Agricultural Company in Nigeria</h4>
                        <p>Suite 519/525/527, The Kings Plaza, 308 Ahmadu Bello Wy, opposite NAF Conference Centre, Kado, Abuja 900108, Federal Capital Territory, Nigeria</p>
                        <div className="company-actions">
                            <button className="view-btn">View on Map</button>
                            <button className="save-btn">Save Company</button>
                        </div>
                    </div>
                        <div className="company-item">
                            <h4>Chifam Investment Ltd.- Agricultural Company in Nigeria</h4>
                            <p>No. 13, Ezekiel Street, Off, Toyin St, Ikeja 100271, Nigeria</p>
                            <div className="company-actions">
                                <button className="view-btn">View on Map</button>
                                <button className="save-btn">Save Company</button>
                            </div>
                        </div>
                        <div className="company-item">
                            <h4>Farmcrowdy Limited</h4>
                            <p>4b Kafayat Abdulrasaq Street, Lekki Phase 1, Lagos 100276, Lagos, Nigeria</p>
                            <div className="company-actions">
                                <button className="view-btn">View on Map</button>
                                <button className="save-btn">Save Company</button>
                            </div>
                        </div>
                        <div className="company-item">
                            <h4>Agrorite</h4>
                            <p>1B Olabanji Olajide, Off Mobolaji Johnson Estate, Crescent, Lagos, Nigeria</p>
                            <div className="company-actions">
                                <button className="view-btn">View on Map</button>
                                <button className="save-btn">Save Company</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;