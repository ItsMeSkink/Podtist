import "./HomeFeatures.scss";
import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import $ from "jquery";

export default function HomeFeatures() {
  const [HomeFeatuersValue, setHomeFeatuersValue] = useState(0);

  document.addEventListener("scroll", () => {
    // console.log(HomeFeatuersValue);
    $(".feature h1").css(
      "transform",
      `rotate(${60 + HomeFeatuersValue * 200}deg)  `
    );
    $(".feature h1 span").css(
      "transform",
      `rotate(-${60 + HomeFeatuersValue * 200}deg) scale(0.9)  `
    );
  });
  // useEffect(() => {
  //   console.log(HomeFeatuersValue);
  //   const ft = $(".featuretitle");

  // }, [HomeFeatuersValue]);

  return (
    <Parallax
      className="homefeatures"
      renderLayer={(e) => setHomeFeatuersValue(e)}
    >
      <div className="feature">
        <h1 id="featuretitle">
          <span>Using AI to build your podcast </span>
        </h1>
        <p>
          Write your own script or let the AI be the host. It’s you being the
          main speaker talking about your favourite subject and describing your
          knowledge in your own way while the AI listening and participating in
          the AI generated discussion. Stop finding a Podcast Host and be it
          yourself.
        </p>
      </div>

      <div className="feature">
        <h1 id="featuretitle">
          <span>Get your own Customized Website</span>
        </h1>
        <p>
          Having a website is an exclusive for a Podcast, not only Spotify and
          Google Podcasts is enough. Brain-crafted templates, attractive User
          Interface, design that will blow people’s minds out, developer
          friendly RSS Feed and Drag and Drop DIY Websites. Share your work with
          people and your friends with your exclusive URL.
        </p>
      </div>

      <div className="feature">
        <h1 id="featuretitle">
          <span>Distrubute Globally on all Platforms</span>
        </h1>
        <p>
          Along with your custom website, we automatically globally distrubute
          your podcast on all of the available platforms like Spotify, Google
          Podcasts, Apple Podcasts and more platforms for free. Get instant
          analytical data. Learn from your analytics and create on the go.
        </p>
      </div>
    </Parallax>
  );
}
