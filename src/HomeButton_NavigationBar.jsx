import React from "react";

export default function HomeButton_NavigationBar() {
  return (
    <div id="homebutton-navigationbar">
      <div
        id="homebutton"
        onClick={() => {
          window.location = "/";
        }}
      >
        <div id="logo">
          <img
            src="https://github.com/ItsMeSkink/Podtist/blob/master/Podtist%20Logo%20PNG.png?raw=true"
            alt="Podtist"
          />
        </div>
        <span>
          <b>Podtist</b>
          <span>
            Long gone the days of finding a perfect Podcast Host Partner
          </span>
        </span>
      </div>

      <div id="NavigationBar">
        <a href="/">People</a>
        <a href="/">News</a>
        <a href="/">Developers</a>
        <a href="/">FAQ</a>
      </div>
    </div>
  );
}
