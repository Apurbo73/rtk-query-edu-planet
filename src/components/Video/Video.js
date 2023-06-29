import React from "react";

const Video = ({ video }) => {
  //   console.log(video);
  const { title, thumbnail, author, duration } = video;
  return (
    <div className="mx-auto">
      {/* {video.title} */}

      <div
        className="card  m-2 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <img style={{height:150}} src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">
            {title}
          </h6>
          <p className="card-text">
            {author}
          </p>
          <p className="card-text">
            Duration: {duration} minutes
          </p>
          <a href="#" className="btn btn-primary w-100">
            Watch video
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
