import React from "react";
import Video from "./Video";

const Videos = ({ videos }) => {
    console.log(videos)
  return (
    <div className="d-flex flex-wrap container mt-5">
      {videos && videos.map(video => <Video video={video} />)}
    </div>
  );
};

export default Videos;
