import "./PodcastDisplay.scss";
import $ from "jquery";
import React from "react";

function PodcastEpisode(props) {
  return (
    <div
      className="Episode"
      onClick={(e) => {
        $('.Episode').removeClass('ClickedEpisode')
        $(e.target).closest(".Episode").addClass("ClickedEpisode");
        // console.log(e.target)
        // console.log(e.target)
      }}
    >
      <div id="NonDescriptionEpisodePart">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/CMB_Timeline300_no_WMAP.jpg"
          alt=""
          id="Thumbnail"
        />
        <div id="Title-EpisodeNo-Date-PlayButton">
          <h4>The Beginning of Everything | The Quantomy Podcast</h4>
          <div id="EpisodeNo-Date-PlayButton">
            <span>S1 • E1</span>
            <span>15th September, 2021</span>
            {/* <span>Play</span> */}
            <span id="Play" class="material-icons-round">
              play_circle_filled
            </span>
          </div>
        </div>
      </div>
      <div id="EpisodeDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi
        modi dolore recusandae explicabo itaque ea aliquam ducimus doloremque
        earum! Sit corporis ullam laboriosam est saepe. Nisi eius dicta illo
        accusantium culpa. Distinctio, laudantium nesciunt. Ducimus animi non
        asperiores molestiae eum explicabo quisquam totam officiis dolore
        itaque, ea, omnis sequi? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestias aut eius sed, corporis deserunt praesentium
        mollitia nesciunt. Harum, voluptates facilis!
      </div>
    </div>
  );
}

export default function PodcastDisplay() {
  return (
    <div id="PodcastEpisodes">
      <div id="TitleImage-Name-Host">
        <img
          src="https://github.com/ItsMeSkink/Quantomy/blob/master/Quantomy%20Logo2%20-%20Copy%20(2).png?raw=true"
          alt="Quantomy Podcast"
          id="TitleImage"
        />
        <h1>The Quantomy Podcast</h1>
        <div>-Lakshya Pratap Monga</div>
      </div>
      <div id="Episode-About-PlayAnimation">
        <div id="EpisodesContainer">
          <PodcastEpisode />
          <PodcastEpisode />
          <PodcastEpisode />
          <PodcastEpisode />
        </div>
        <div id="About">
          <h3>About</h3>
          <span>
            Welcome to the Quantomy Podcast, here we describe the workings of
            the nature in layman terms. Our aim is to make people more curious
            towards Science. Main Speakers: Shourya Sethi : Biology Lakshya
            Pratap Monga : Physics Manan Sethi : Mathematics
          </span>
        </div>
      </div>
    </div>
  );
}
