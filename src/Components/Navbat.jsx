import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Apps");
  const [activeDevice, setActiveDevice] = useState("Phone");

  const tabs = ["Games", "Apps", "Books", "Children"];
  const devices = ["Phone", "Tablet", "TV", "Chromebook", "Watch", "Car"];
  const deviceIcons = {
    Phone: "smartphone",
    Tablet: "tablet",
    TV: "tv",
    Chromebook: "laptop_chromebook",
    Watch: "watch",
    Car: "directions_car",
  };

  return (
    <div className="navbar-container">
      {/* Top Nav */}
      <div className="navbar-top">
        <div className="navbar-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
            alt="Logo"
            className="logo"
          />
          <span className="title">Google Play</span>
        </div>

        <div className="navbar-right">
          <span className="material-icons icon">search</span>
          <span className="material-icons icon">help_outline</span>
          <span className="material-icons icon">account_circle</span>
        </div>
      </div>

      {/* Scrollable Tabs */}
      <div className="tabs-scroll">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Scrollable Devices */}
      <div className="device-scroll">
        {devices.map((device) => (
          <button
            key={device}
            className={`device-btn ${activeDevice === device ? "active-device" : ""}`}
            onClick={() => setActiveDevice(device)}
          >
            <span className="material-icons device-icon">{deviceIcons[device]}</span>
            {device}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
