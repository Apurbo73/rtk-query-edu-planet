import React from "react";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  //   console.log(video);
  const { title, thumbnail, author, duration, id } = video;
  return (
    <div className="col-12 col-md-3 col-lg-3">
      <div className="card text-center text-dark card-bg pb-2 mt-3">
        <div className="card-body">
          <img
            style={{ height: 240 }}
            src={thumbnail}
            className="card-img-top p-3 image   rounded"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">
              Author: {author}
            </p>
            {/* <p className="card-text">
            Category: {category}
          </p> */}
            <p className="card-text">
              Duration: {duration}
            </p>
            <Link to={`/videos/${id}`} href="#" className="btn btn-dark w-100">
            Watch video
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
