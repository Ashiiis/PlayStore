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

      <div className="similar-games-section">
  <h2>Similar games</h2>
  <div className="similar-games-grid">
    <div className="similar-game-card">
      <img src="link-to-image1" alt="The Tiger" />
      <div>
        <p className="game-title">The Tiger</p>
        <p className="game-sub">Swift Apps LTD</p>
        <p className="game-rating">4.2★</p>
      </div>
    </div>
    <div className="similar-game-card">
      <img src="link-to-image2" alt="Spider Fighter 3" />
      <div>
        <p className="game-title">Spider Fighter 3</p>
        <p className="game-sub">Starplay DMCC</p>
        <p className="game-rating">4.4★</p>
      </div>
    </div>
    <div className="similar-game-card">
      <img src="link-to-image3" alt="The Wolf" />
      <div>
        <p className="game-title">The Wolf</p>
        <p className="game-sub">Swift Apps LTD</p>
        <p className="game-rating">4.3★</p>
      </div>
    </div>
    <div className="similar-game-card">
      <img src="link-to-image4" alt="Survival Ark" />
      <div>
        <p className="game-title">Survival Ark</p>
        <p className="game-sub">Joynow Studio</p>
        <p className="game-rating">3.5★</p>
      </div>
    </div>
    <div className="similar-game-card">
      <img src="link-to-image5" alt="Raft Survival" />
      <div>
        <p className="game-title">Raft Survival</p>
        <p className="game-sub">Survival Games Ltd</p>
        <p className="game-rating">4.3★</p>
      </div>
    </div>
    <div className="similar-game-card">
      <img src="link-to-image6" alt="Pirates Flag" />
      <div>
        <p className="game-title">Pirates Flag</p>
        <p className="game-sub">HeroCraft Ltd.</p>
        <p className="game-rating">4.5★</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default PlayStoreAppCard;
