import React from "react";
import "./appdetail.css";

const PlayStoreAppCard = () => {
  return (
    <div className="playstore-app-card">
      {/* Top Section */}
      <div className="app-top-section">
        <div className="app-info-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" 
            // here above , you have to put the link of the logo
            alt="Instagram Lite"
            className="app-icon"
          />
          <div className="app-text">
            <h1 className="app-title">Your App Name </h1> 
            {/* //here you should add the name of your app, */}
            <p className="app-subtitle">Your App Short name</p>
            {/* here you should add the name of your app again  */}
            <div className="app-meta">
              <span>3.9★</span>
              <span>·</span>
              <span>2.07M reviews</span>
              <span>·</span>
              <span>10M+ Downloads</span>
              <span>·</span>
              <span>Rated for 12+</span>
            </div>
          </div>
        </div>

        <div className="app-install-section">
          <a href="/path-to-your-apk/yourapp.apk" download className="install-btn">
                Install
            </a>
            {/* replace '/path-to-your-apk/yourapp.apk' with your applications download link  */}
          <div className="actions">
            <button className="share-btn">Share</button>
            <button className="wishlist-btn">Add to wishlist</button>
          </div>
        </div>
      </div>

      {/* Screenshot Carousel */}
      

      {/* Availability & Family Info */}
      <div className="availability-info">
        <p>This app is available for all of your devices</p>
        <p>
          You can share this with your family.{" "}
          <a href="/additional-link">Learn more about Family Library</a> 
          {/* any additional Link can be added under " " above */}
        </p>
      </div>
      <h2>About This App</h2>
      <p>About Your app</p>
    </div>
  );
};

export default PlayStoreAppCard;
