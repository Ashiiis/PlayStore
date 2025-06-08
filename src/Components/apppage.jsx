import "./apppage.css";
import React, { useState } from "react";
const AppStoreCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleInstall = () => {
  setIsLoading(true);

  const link = document.createElement("a");
  link.href = "https://your-download-link.com/file.apk"; // add the direct file link
  link.setAttribute("download", ""); 
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => setIsLoading(false), 2000); 
};

  return (
    <div className="app-card">
      <div className="app-main">
        <div className="app-details">
          <h1 className="app-name">Your App Name</h1> add the app name
          <p className="developer-name">Company Name</p>
          <div className="app-stats">
        <div className="stat-block">
          <strong>4.6★</strong>
          <p>18.1M reviews</p>
        </div>
        <div className="divider" />
        <div className="stat-block">
          <strong>100k+</strong>
          <p>Downloads</p>
        </div>
        <div className="divider" />
        <div className="stat-block">
          <strong className="rating-box">12+</strong>
          <p>Rated for 12+</p>
        </div>
      </div>
          <button className="install-btn" onClick={handleInstall} disabled={isLoading}>
      {isLoading ? <span className="loader"></span> : "Install"}
    </button>
        </div>
        
        <img
          className="app-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          alt="ChatGPT logo"
        />
        {/* add app logo by replacing the above link */}
      </div>
      <p>This app is available for all of your devices</p>
        <p>You can share this with your family. 
Learn more about Family Library</p>
 <div className="playstore-container">
      {/* LEFT SIDE */}
      <div className="left-section">
  <div className="banner-scroll">
    {[
      'https://play-lh.googleusercontent.com/eSCXG0tenlgO9df-3n_iLMcopOlhxMUgSjRV9N_GTsr02ST1J-87rA2I5bUIm7aPj4hF=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/Banner2',
      'https://play-lh.googleusercontent.com/Banner3',
      'https://play-lh.googleusercontent.com/Banner4',
      'https://play-lh.googleusercontent.com/Banner5',
      // add the images link of banners or photos of the app
    ].map((src, index) => (
      <div className="banner-card" key={index}>
        <img src={src} alt={`Banner ${index + 1}`} className="banner-img" />
      </div>
    ))}
  </div>


        {/* About this app */}

        {/* here add the descriptions and details to the app */}
        <div className="about-section">
          <h2>About this app</h2>
          <p className="about-description">
            Introducing ChatGPT for Android: OpenAI’s latest advancements at your fingertips.
            <br /><br />
            This official app is free, syncs your history across devices, and brings you the latest from OpenAI, including the new image generator.
            <br /><br />
            With ChatGPT in your pocket, you’ll find:
          </p>
          <p className="updated-date"><strong>Updated on</strong><br />Jun 6, 2025</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">
        

        <div className="similar-apps">
          <h3>Similar apps</h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.pinterest"
            target="_blank"
            rel="noopener noreferrer"
            className="similar-app-card-link"
        >         
            <div className="similar-app-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                alt="Pinterest"
              />
              <div className="info">
                <h4>Pinterest</h4>
                <p className="subtitle">Pinterest Inc.</p>
                <p>★ 4.5</p>
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ai.x.grok&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="similar-app-card-link"
        >  
          <div className="similar-app-card">
            <img src="https://play-lh.googleusercontent.com/dQRKhi30KpzG3gww3TdVLzyIAVuOAWylnAcgnEUxqfpm2A8dEt2sgApVvtKAy-DO8aI=s128-rw" alt="Grok" />
            <div className="info">
              <h4>Grok - AI Assistant</h4>
              <p className="subtitle">xAi</p>
              <p>★ 4.8</p>
            </div>
          </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="similar-app-card-link"
        >  
          <div className="similar-app-card">
            <img src="https://play-lh.googleusercontent.com/7ynvVIRdhJNAngCg_GI7i8TtH8BqkJYmffeUHsG-mJOdzt1XLvGmbsKuc5Q1SInBjDKN=s128-rw" alt="Spotify" />
            <div className="info">
              <h4>Spotify: Music and Podcasts</h4>
              <p className="subtitle">Spotify AB</p>
              <p>★ 3.8</p>
            </div>
          </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.deepseek.chat&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="similar-app-card-link"
        >  
          <div className="similar-app-card">
            <img src="https://play-lh.googleusercontent.com/d2zqBFBEymSZKaVg_dRo1gh3hBFn7_Kl9rO74xkDmnJeLgDW0MoJD3cUx0QzZN6jdsg=s128-rw" alt="DeepSeek" />
            <div className="info">
              <h4>DeepSeek - AI Assistant</h4>
              <p className="subtitle">DeepSeek</p>
              <p>★ 3.8</p>
            </div>
          </div>
          </a>
          <a
            href="https://play.google.com/store/search?q=chrome&c=apps&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="similar-app-card-link"
        >  
          <div className="similar-app-card">
            <img src="https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc=s128-rw" alt="Chrome" />
            <div className="info">
              <h4>Google Chrome</h4>
              <p className="subtitle">Google</p>
              <p>★ 4.1</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppStoreCard;
