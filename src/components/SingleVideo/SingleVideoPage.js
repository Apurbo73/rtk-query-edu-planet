import React from "react";
import { FaEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
const SingleVideoPage = ({ singleVideo }) => {
  console.log(singleVideo);

  const { title, duration, description, author, link } = singleVideo;
  return (
    <div>
      <iframe
        style={{ height: 350 }}
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>
        <div className="d-flex">
          <div>
            <p >
              Title: {title}
            </p>
          </div>
          <div className="ms-auto">
            <button className="btn  btn-outline-primary m-1 ">
              <FaEdit />
            </button>
            <button className="btn btn-outline-danger m-1">
              <BsFillTrashFill />
            </button>
          </div>
        </div>
        <div >
          <div>
            <p className="card-text">
              Author: {author}
            </p>
            <p className="card-text">
              Duration: {duration} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
