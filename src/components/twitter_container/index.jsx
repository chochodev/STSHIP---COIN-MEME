// import React, { useEffect } from "react";

// const TwitterContainer = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://platform.twitter.com/widgets.js";
//     document.getElementsByClassName("twitter-embed")[0].appendChild(script);
//   }, []);

//   return (
//     <section className="twitterContainer">
//       <div className="twitter-embed">
//         <a
//           className="twitter-timeline"
//           data-theme="dark"
//           data-tweet-limit="3"
//           data-width="300"
//           data-chrome="noheader nofooter noborders"
//           href="https://twitter.com/StarShip_Sol"
//         >
//           Tweets by StarShip_Sol
//         </a>
//       </div>
//     </section>
//   );
// };

// export default TwitterContainer;

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
    anchor.setAttribute("data-width", "100%"); // Set to 100% for responsiveness
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/StarShip_Sol");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  
    const updateTwitterWidth = () => {
      const twitterTimeline = document.querySelector(".twitter-embed a.twitter-timeline");
      if (twitterTimeline) {
        const width = window.innerWidth >= 768 ? 700 : 310;
        twitterTimeline.setAttribute("data-width", `${width}`);
        window.twttr.widgets.load();
      }
    };
  
    updateTwitterWidth();

    window.addEventListener("resize", updateTwitterWidth);
  
    return () => {
      window.removeEventListener("resize", updateTwitterWidth);
    };
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
};

export default TwitterContainer;