import React from "react";
import "./App.css";
import Video from "./Video";


function App() {
  
  return (
    <div className='app'>
      <div className='app_videos'>
        <Video
          url='https://v16m.tiktokcdn.com/ad20393f66402f2e3f108b212cfc0dc0/5f53e3e9/video/tos/useast2a/tos-useast2a-ve-0068c004/9c6accf20977468f962ba959077de6c6/?a=1233&br=2262&bt=1131&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009051315410101150402270B368F5E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzR1NzkzZXJmdzMzaTczM0ApNTU0ZzozOjw4Nzo4ZWQ0M2dyaGg0cWVtLTZfLS0tMTZzc2ExYC41NDJfYDMvMl8xMF86Yw%3D%3D&vl=&vr='
          channel='addisonre'
          description='Enjoy life!'
          song='99 problems and REACT aint one'
          likes={123}
          messages={324}
          shares={263}
        />

        <Video
          url='https://v16m.tiktokcdn.com/7384bb7e5c70e20a82cce16a252701d2/5f53e3b4/video/tos/useast2a/tos-useast2a-pve-0068/14c5096a19ae4ab8890fcd45f52be2fe/?a=1233&br=3424&bt=1712&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009051314490101150402270B36726A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anY6ZzlmOnJodzMzOjczM0ApOjxpNWRlN2U4Nzw4M2c8O2dlY3JvNmVjMTZfLS01MTZzczMyLWM2MDAxM2BeMmAvNS86Yw%3D%3D&vl=&vr='
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
