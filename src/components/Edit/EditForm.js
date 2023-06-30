import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEditVideoMutation } from "../../features/ApiSlice/apiSlice";
import { useNavigate } from "react-router-dom";
const EditForm = ({ singleVideo }) => {
  const navigate = useNavigate();
  const {
    id,
    title: initialTitle,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    link: initialLink,
    duration: initialDuration
  } = singleVideo;

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [link, setLink] = useState(initialLink);
  console.log(link);
  const [duration, setDuration] = useState(initialDuration);
  const [
    editVideo,
    { isLoading, isError, error, isSuccess }
  ] = useEditVideoMutation();
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    editVideo({
      id,
      data: {
        title,
        link,
        author,
        thumbnail,
        duration
      }
    });

    resetForm();
  };

  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, [isSuccess]);
  //reset form:
  const resetForm = () => {
    setAuthor("");
    setDuration("");
    setLink("");
    setThumbnail("");
    setTitle("");
  };
  return (
    <div style={{ backgroundColor: "#FFD580", padding: 10 }}>
      <div className="mx-auto mt-3 mb-3 ">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3">Update Video Detail !!</h4>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter video title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter thumbnail link"
              value={thumbnail}
              onChange={e => {
                setThumbnail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter author title"
              value={author}
              onChange={e => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter duration"
              value={duration}
              onChange={e => {
                setDuration(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter video link"
              value={link}
              onChange={e => {
                setLink(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 btn-outline-dark text-light"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
