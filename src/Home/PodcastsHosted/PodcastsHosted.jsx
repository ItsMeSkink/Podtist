import "./PodcastsHosted.scss";

import React from "react";

function PodcastHostedTemplate(props) {
  return (
    <span>
      <img src={props.PodcastImage} alt={props.PodcastName} />
      <h3>{props.PodcastName}</h3>
    </span>
  );
}

export default function PodcastsHosted() {
  return (
    <div id="PodcastHosted">
      <PodcastHostedTemplate
        PodcastImage="https://github.com/ItsMeSkink/Quantomy/blob/master/Quantomy%20Logo2%20-%20Copy%20(2).png?raw=true"
        PodcastName="The Quantomy Podcast"
      />
      <PodcastHostedTemplate
        PodcastImage="https://yt3.ggpht.com/ytc/AKedOLT8KE7QVXDSStqlZUdFZC1HKP5_5dqD55UdBjlESP4=s900-c-k-c0x00ffffff-no-rj"
        PodcastName="Startalk by Neil Degrasse Tyson"
      />
      <PodcastHostedTemplate
        PodcastImage="https://i.scdn.co/image/ab6765630000ba8a6a25aaedf2c3dd614fb55109"
        PodcastName="The Ranveer Show"
      />
      <PodcastHostedTemplate
        PodcastImage="https://i.scdn.co/image/534dcc01b53149409352f439145482ef1d32d686"
        PodcastName="GaryVee Audio Experience"
      />
      <PodcastHostedTemplate
        PodcastImage="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Joe_Rogan_Experience_logo.jpg/220px-The_Joe_Rogan_Experience_logo.jpg"
        PodcastName="The Joe Rogan Experience"
      />
      <PodcastHostedTemplate
        PodcastImage="https://www.omnycontent.com/d/programs/4bb33704-615b-4054-aae9-ace500fd4197/c6e18bb1-650c-43bf-a852-ace600482419/image.jpg?t=1615263970&size=Large"
        PodcastName="Woice with Ankur Warikoo"
      />
      <PodcastHostedTemplate
        PodcastImage="https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png"
        PodcastName="Lex Fridman Podcast"
      />
      <PodcastHostedTemplate
        PodcastImage="https://media.wired.com/photos/59399bfbfbdfa3763bab980c/1:1/w_350,c_limit/quantalogo-1.jpg"
        PodcastName="QuantaMagazine Podcast"
      />
      <PodcastHostedTemplate
        PodcastImage="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/gravity-assist-logo_0.jpg?itok=BpAlfpcH"
        PodcastName="Gravity Assist NASA Podcast"
      />
      <PodcastHostedTemplate PodcastImage="https://images.theabcdn.com/i/38221353/600/c" PodcastName="CERN Sparks Podcast"  />
    </div>
  );
}
