import React from "react";
import Video from "./Video";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="">
      <div className="mt-5 row">
        {videos && videos.map(video => <Video key={video.id} video={video} />)}
      </div>
    </div>
  );
};

export default Videos;
