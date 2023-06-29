import React from "react";
import Video from "./Video";

const Videos = ({ videos }) => {
    console.log(videos)
  return (
    <div>
      {videos && videos.map(video => <Video video={video} />)}
    </div>
  );
};

export default Videos;
