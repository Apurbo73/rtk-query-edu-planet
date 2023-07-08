import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useDeleteVideoMutation } from "../../features/ApiSlice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
const SingleVideoPage = ({ singleVideo }) => {
  // console.log(singleVideo);
  const navigate = useNavigate();
  const { title, duration, description, author, link, id } = singleVideo;
  const [deleteVideo, { isLoading, isSuccess }] = useDeleteVideoMutation();
  //handle Delete:
  const handleDelete = e => {
    deleteVideo(id);
  };
  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );
  return (
    <div className="mb-5">
      <iframe
        style={{ height: 450 }}
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
            <p>
              Title: {title}
            </p>
          </div>
          <div className="ms-auto">
            <Link
              to={`/videos/edit/${id}`}
              className="btn  btn-outline-primary m-1 "
            >
              <FaEdit />
            </Link>
            <button
              className="btn btn-outline-danger m-1"
              onClick={handleDelete}
            >
              <BsFillTrashFill />
            </button>
          </div>
        </div>
        <div>
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
