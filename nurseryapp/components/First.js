import React, { useState } from 'react';
import './First.css';

const First = () => {
  const [location, setLocation] = useState('');

  const flowers = ['Rose', 'Lily', 'Tulip', 'Sunflower', 'Jasmine'];
  const locations = ['Chennai', 'Bangalore', 'Mumbai', 'Delhi'];

  return (
    <div className="first-container">
      <h2 className="first-heading">Creating the Nursery Page</h2>
      <p>Welcome to the nursery landing page. We hope you find the perfect flowers for your garden!</p>

      <label htmlFor="location-select">Select Location: </label>
      <select
        id="location-select"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-dropdown"
      >
        <option value="">--Choose a city--</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      <ul className="flower-list">
        {flowers.map((flower) => (
          <li key={flower}>{flower}</li>
        ))}
      </ul>
    </div>
  );
};

export default First;
