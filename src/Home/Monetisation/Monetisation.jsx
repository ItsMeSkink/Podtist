import "./Monetisation.scss";

import React from "react";

export default function Monetisation() {
  return (
    <div id="Monetisation">
      <div id="MonetiseImage">
        <img
          src="https://png.pngitem.com/pimgs/s/152-1525670_top-donation-icon-png-download-youtube-demonetisation-logo.png"
          alt="MonetisationImage"
        />
        <h1>Monetize your Podcast</h1>
        <a href="/">
          <i>Use Podtist Sponsorships</i>
          <span class="material-icons-round">arrow_drop_down</span>
        </a>
      </div>
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/AIsb3wfz2AahBcEZRTjstp7PZjA=/0x0:1440x825/1200x800/filters:focal(605x298:835x528)/cdn.vox-cdn.com/uploads/chorus_image/image/66832490/rogan_musk.0.jpg"
          alt="Joe Rogan Podcast"
          id="PodcastImage"
        />
        <h4>The Joe Rogan Podcast</h4>
        <div id="PayOutApplications">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png"
            alt="Paytm"
          />
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fpaypal_416x416.jpg"
            alt="Paypal"
          />
          <img
            src="https://static.thenounproject.com/png/1783867-200.png"
            alt="Back Account"
          />
          <img
            src="https://static.thenounproject.com/png/36264-200.png"
            alt="DogeCoin"
          />
          <img
            src="https://pbs.twimg.com/media/DSAO_LcXUAAP6jL.jpg"
            alt="Amazon Pay"
          />
        </div>
      </div>
    </div>
  );
}
