import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    if (document.querySelector(".twitter-embed a.twitter-timeline")) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "3");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/StarShip_Sol?ref_src=twsrc%5Etfw");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);

    script.onload = () => {
      const tweetContainer = document.querySelector(".twitter-embed");
      const tweets = tweetContainer.querySelectorAll(".timeline-Tweet");
      const tweetLimit = 3;

      if (tweets.length > tweetLimit) {
        tweets.forEach((tweet, index) => {
          if (index >= tweetLimit) {
            tweet.style.display = "none";
          }
        });
      }
    };
  }, []);
 // <a class="twitter-timeline" href="https://twitter.com/StarShip_Sol?ref_src=twsrc%5Etfw">Tweets by StarShip_Sol</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
};

export default TwitterContainer;