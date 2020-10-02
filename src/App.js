import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection("rells").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img src="./maxresdefault.png" alt="" className="app__logo" />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, src, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            src={src}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
