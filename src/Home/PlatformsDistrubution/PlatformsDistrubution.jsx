import "./PlatformsDistrubution.scss";

import React from "react";

export default function PlatformsDistrubution() {
  return (
    <div id="PlatformsDistribution">
      <div>
        <h1>Popularly Distributed To</h1>
        <div className="platform">
          <img
            src="https://www.freeiconspng.com/uploads/spotify-icon-2.png"
            alt="Spotify"
            id="Spotify"
          />
          <h1>Spotify</h1>
        </div>
        <div className="platform">
          <img
            src="https://planetsmarts.com/wp-content/uploads/2021/05/Google-Podcasts-improves-its-interface-and-its-recommendation-system.png"
            alt="Google Podcasts"
            id="Google Podcasts"
          />
          <h1>Google Podcasts</h1>
        </div>
        <div className="platform">
          <img
            src="https://pbs.twimg.com/profile_images/1412524581076619271/WTZTcrKw.jpg"
            alt="Amazon Music"
            id="Amazon Music"
          />
          <h1>Amazon Music</h1>
        </div>
        <div className="platform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png"
            alt="Apple Podcasts"
            id="Apple Podcasts"
          />
          <h1>Apple Podcasts</h1>
        </div>
      </div>
    </div>
  );
}
