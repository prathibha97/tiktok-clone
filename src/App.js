import React from "react";
import "./App.css";
import Video from "./Video";


function App() {
  
  return (
    <div className='app'>
      <div className='app_videos'>
        <Video
          url='https://v16m.tiktokcdn.com/b4ec1585942f781498e710fdc2ae9fb4/5f522157/video/tos/useast2a/tos-useast2a-ve-0068c004/4923f800761743e887c360bb25d23fb5/?a=1233&br=2986&bt=1493&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090405131901023410514161004422&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzduZmptc3J3dzMzNjczM0ApNWhmMzc7aWQ0N2RmZzMzZmcxLjZrZG5yZDRfLS00MTZzczBhNjMuNGAwNDUtNDYvM2M6Yw%3D%3D&vl=&vr='
          channel='addisonre'
          description='Enjoy life!'
          song='99 problems and REACT aint one'
          likes={123}
          messages={324}
          shares={263}
        />

        <Video
          url='https://v16m.tiktokcdn.com/02bc7d8555917e1dcfd5ad5f52757ff1/5f52215e/video/tos/useast2a/tos-useast2a-pve-0068/96ec57f6e9654159a05331e2286f22d2/?a=1233&br=2326&bt=1163&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090405131901023410514161004422&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRuNTU6eTt5dzMzNTczM0ApNGRpaDM4ZDs8N2g8MzNkM2dvcHFfamJhMTRfLS0uMTZzc2M1LWE1NV8zYDQ0LTAvMGI6Yw%3D%3D&vl=&vr='
          channel='addisonre'
          description='Enjoy life!'
          song='99 problems and REACT aint one'
          likes={123}
          messages={324}
          shares={263}
        />
      </div>
    </div>
  );
}

export default App;
