import React, { /* useState, */ useEffect, useRef } from 'react';

function Video() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.src = videoRef.current.offsetWidth < 768 ? './assets/vid/2022-tdr_report_banner_animation_11.mp4' : './assets/vid/2022-tdr_report_banner_animation_169.mp4';
    videoRef.current.poster = videoRef.current.offsetWidth < 768 ? './assets/img/2022-tdr_report_banner_animation_11.jpg' : './assets/img/2022-tdr_report_banner_animation_169.jpg';
  }, []);
  return (
    <>
      <div className="video_container">
        <video src="" autoPlay muted ref={videoRef} poster="">
          <track default kind="captions" srcLang="en" src="" />
        </video>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default Video;