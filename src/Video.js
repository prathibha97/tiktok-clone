import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel, description, likes, song, shares, messages}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    // if video is playing
    if (playing) {
      // stop it
      videoRef.current.pause();
      setPlaying(false);
    }
    // otherwise if not playing
    else {
      // play it
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
        src={url}></video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  );
}

export default Video;
