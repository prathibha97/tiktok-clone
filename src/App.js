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
  })
  return (
    <div className="App">
      <div className='app_videos'>
        {}
      </div>
    </div>
  );
}

export default App;
