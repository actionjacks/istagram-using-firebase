import React from "react";
import "../styles/VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AppsIcon from "@material-ui/icons/Apps";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <h3>reels</h3>
      <AppsIcon />
    </div>
  );
}

export default VideoHeader;
