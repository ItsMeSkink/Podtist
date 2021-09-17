import "./Podcasts.scss";
import { Link } from "react-router-dom";

import React from "react";

function PodcastTemplate(props) {
  const link = props.PodcastName.toLowerCase().replace(/ /g, "");
  console.log(link);
  return (
    <Link className="podcast" to={link}>
      <img src={props.PodcastImage} alt={props.PodcastName} />
      <h3>{props.PodcastName}</h3>
      <span>-{props.PodcastHost} </span>
    </Link>
  );
}

export default function Podcasts() {
  return (
    <div id="podcasts">
      <PodcastTemplate
        PodcastImage="https://github.com/ItsMeSkink/Quantomy/blob/master/Quantomy%20Logo2%20-%20Copy%20(2).png?raw=true"
        PodcastName="The Quantomy Podcast"
        PodcastHost="Lakshya Pratap Monga"
      />
      <PodcastTemplate
        PodcastImage="https://yt3.ggpht.com/ytc/AKedOLT8KE7QVXDSStqlZUdFZC1HKP5_5dqD55UdBjlESP4=s900-c-k-c0x00ffffff-no-rj"
        PodcastName="Startalk by Neil Degrasse Tyson"
        PodcastHost="Neil DeGrasse Tyson"
      />
      <PodcastTemplate
        PodcastImage="https://i.scdn.co/image/ab6765630000ba8a6a25aaedf2c3dd614fb55109"
        PodcastName="The Ranveer Show"
        PodcastHost="Ranveer Allhabadia"
      />
      <PodcastTemplate
        PodcastImage="https://i.scdn.co/image/534dcc01b53149409352f439145482ef1d32d686"
        PodcastName="GaryVee Audio Experience"
        PodcastHost="Gary Vaynerchuck"
      />
      <PodcastTemplate
        PodcastImage="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Joe_Rogan_Experience_logo.jpg/220px-The_Joe_Rogan_Experience_logo.jpg"
        PodcastName="The Joe Rogan Experience"
        PodcastHost="Joe Rogan"
      />
      <PodcastTemplate
        PodcastImage="https://www.omnycontent.com/d/programs/4bb33704-615b-4054-aae9-ace500fd4197/c6e18bb1-650c-43bf-a852-ace600482419/image.jpg?t=1615263970&size=Large"
        PodcastName="Woice with Ankur Warikoo"
        PodcastHost="Ankur Warikoo"
      />
      <PodcastTemplate
        PodcastImage="https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png"
        PodcastName="Lex Fridman Podcast"
        PodcastHost="Lex Fridman"
      />
      <PodcastTemplate
        PodcastImage="https://media.wired.com/photos/59399bfbfbdfa3763bab980c/1:1/w_350,c_limit/quantalogo-1.jpg"
        PodcastName="QuantaMagazine Podcast"
        PodcastHost="QuantaMagazine.org"
      />
      <PodcastTemplate
        PodcastImage="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/gravity-assist-logo_0.jpg?itok=BpAlfpcH"
        PodcastName="Gravity Assist NASA Podcast"
        PodcastHost="NASA"
      />
      <PodcastTemplate
        PodcastImage="https://images.theabcdn.com/i/38221353/600/c"
        PodcastName="CERN Sparks Podcast"
        PodcastHost="CERN"
      />
    </div>
  );
}
