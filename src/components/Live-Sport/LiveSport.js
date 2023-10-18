import React from "react";
import "./LiveSport.css";
import logo1 from "../../assets/img/live-sports-logo-1.png";
import logo2 from "../../assets/img/live-sports-logo-2.png";
import logo3 from "../../assets/img/live-sports-logo-3.svg";
import logo4 from "../../assets/img/live-sports-logo-4.png";

const LiveSport = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const tabs = ["Live Sports", "Breaking News", "Biggest Events"];
  return (
    <section class="live-sports">
      <div class="live-sports-container">
        <div className="TabButtons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              aria-label={tab}
              id={`tab${index}`}
              className={`TabButtons__tab ${
                index === activeTabIndex ? "--active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              <span className=" css-2ey7cn" style={{ fontWeight: "bold" }}>
                {tab}
              </span>
            </button>
          ))}
        </div>
        <div class="text-li">Live Sports</div>
        <div class="sub-texts">
          Catch your games at home or on the go. Stream live games from major
          college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
          Includes top local and national sports networks like ABC, CBS Sports
          Network, ESPN, FOX, FS1, TNT, NFL Network and more.
        </div>
        <div class="live-sports-logos">
          <div>
            <img src={logo1} alt="" />
          </div>
          <div>
            <img src={logo2} alt="" />
          </div>
          <div>
            <img src={logo3} alt="" />
          </div>
          <div>
            <img src={logo4} alt="" />
          </div>
        </div>
        <div class="terms">
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply.<span class="terms_1">See details.</span>
        </div>
      </div>
    </section>
  );
};

export default LiveSport;
