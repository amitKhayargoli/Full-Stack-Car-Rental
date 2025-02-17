import React from "react";
import ReactPlayer from "react-player";
import "./bg.css"; // Import CSS for styling
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackgroundVideo = () => {
  const navigate = useNavigate();
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://vimeo.com/1056753657?share=copy#t=0" // Replace with your video URL
        playing
        loop
        muted
        width="1920px"
        height="1080px"
        className="video-player"
      />

      <div className="overlay"></div>
      <div className="content">
        <h1 className="font-bold text-2xl xl:text-[2em]">START STRONG</h1>
        <p id="p" className="font-bold text-2xl xl:!text-[4em]">
          DRIVE BEYOND YOUR LIMITS
        </p>

        <button
          className="cursor-pointer"
          onClick={() => navigate("/CustomerDashboard")}
        >
          <ChevronRight size={60} className="border-2"></ChevronRight>
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
