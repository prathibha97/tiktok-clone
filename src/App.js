import React, { useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';

function App() {
  const [videos,setVideos] =useState([])

  useState(()=>{
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  },[]);
  return (
    <div className="App">
      <div className='app_videos'>
        {videos.map(
          ({url,channel,description,song,likes,messages,shares})=>(
            <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
            />
          )
          )}
      </div>
    </div>
  );
}

export default App;
