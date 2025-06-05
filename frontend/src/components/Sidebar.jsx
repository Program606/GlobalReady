import React from 'react';
import './Sidebar.css'; // Optional: for styling

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Country Information</h3>
      <input type="text" placeholder="Enter country name" />
      <button className="btn">Get Country Info</button>
    </aside>
  );
}

export default Sidebar; 