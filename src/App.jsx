import "./App.scss";
import HomeButton_NavigationBar from "./HomeButton_NavigationBar";
import HomeIntro from "./Home/HomeIntro/HomeIntro";
import HomeFeatures from "./Home/HomeFeatures/HomeFeatures";
import PodcastsHosted from "./Home/PodcastsHosted/PodcastsHosted";
import DemoVideo from "./Home/DemoVideo/DemoVideo";
import Monetisation from "./Home/Monetisation/Monetisation";
import InbuiltVideoRecordingFeatures from "./Home/InbuiltVideoRecordingFeature/InbuiltVideoRecordingFeature";
import PlatformsDistrubution from "./Home/PlatformsDistrubution/PlatformsDistrubution";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Podcasts from "./Podtists/Podcasts";
import PodcastDisplay from "./Podtists/PodcastDisplay/PodcastDisplay";

function App() {
  // setTimeout(() => {
  document.addEventListener("scroll", () => {
    const yc = Math.round($(".App")[0].getBoundingClientRect().y);
    console.log(yc);

    if (yc < -40) {
      $("#homebutton-navigationbar").addClass("scrolled-navbar");
    } else {
      $("#homebutton-navigationbar").removeClass("scrolled-navbar");
    }
  });
  // }, 1);
  return (
    <div className="App">
      <Router>
        <HomeButton_NavigationBar />
        <Route exact path="/">
          <div id="home">
            <HomeIntro />
            <HomeFeatures />
            <PodcastsHosted />
            <DemoVideo />
            <Monetisation />
            <InbuiltVideoRecordingFeatures />
            <PlatformsDistrubution />
          </div>
        </Route>
        <Route exact path="/podtists">
          <div id="podtists">
            <h1>Not just listen but grasp!</h1>
            <Podcasts />
          </div>
        </Route>
        <Route exact path="/thequantomypodcast">
          <PodcastDisplay />
        </Route>
      </Router>
    </div>
  );
}

export default App;
