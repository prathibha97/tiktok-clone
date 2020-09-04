import React, { useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import './Video.css';

function Video({ url, channel, description, likes, song, shares, messages }) {
  const videoRef = useState(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.puase();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className='video'>
      <video
        onClick={handleVideoPress}
        className='video_player'
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter/>
      <VideoSidebar/>
    </div>
  );
}

export default Video;
