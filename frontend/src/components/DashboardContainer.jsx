import React from "react";

function DashboardContainer() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>ProbaClim Forcaster</h1>
        <p>Predict the weather for any given date and location</p>
      </div>
      <div className="input-section">
        <input type="date" />
        <input type="text" placeholder="Enter location" />
        <button>Get Forecast</button>
      </div>
      <div className="forecast">
        <p>Weather details will appear here</p>
      </div>
    </div>
  );
}

export default DashboardContainer;
