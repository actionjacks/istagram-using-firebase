import React from "react";
import { Button, Avatar, IconButton } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import ChatIcon from "@material-ui/icons/Chat";
import CasinoIcon from "@material-ui/icons/Casino";
import CreateIcon from "@material-ui/icons/Create";
import DataUsageIcon from "@material-ui/icons/DataUsage";

import "../styles/VideoFooter.css";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} * <Button>Fallow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <p>{song}</p>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionLeft">
          <ChatIcon fontSize="large" />
          <CasinoIcon fontSize="large" />
          <CreateIcon fontSize="large" />
          <DataUsageIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionRight">
          <div className="videoFooter__stat">
            <ChatIcon />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ChatIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
