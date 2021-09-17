import React from "react";
import "./HomeIntro.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <div id="HomeIntro">
      <div id="tagline-hostbutton">
        <h1>A Good Conversation is always Productive</h1>

        <button>Host a Podcast</button>
        <img
          src="https://github.com/ItsMeSkink/Podtist/blob/master/Microphone_Image-removebg-preview.png?raw=true"
          alt="Transparent Microphone"
        />
      </div>
      <div id="featurebuttons">
        <Link to="/podtists">Podtists</Link>
        <Link>Make A Switch</Link>
        <Link>Help us Develop</Link>
      </div>
    </div>
  );
}
