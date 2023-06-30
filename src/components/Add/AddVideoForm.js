import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddVideoMutation } from "../../features/ApiSlice/apiSlice";
const AddVideoForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [link, setLink] = useState("");
  const [duration, setDuration] = useState("");
  const [
    addVideo,
    { isLoading, isError, error, isSuccess }
  ] = useAddVideoMutation();
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    addVideo({
      title,
      link,
      author,
      thumbnail,
      duration
    });

    resetForm();
    {
      title != " " && toast(`New video ${title} is added`);
    }
  };

  //reset form:
  const resetForm = () => {
    setAuthor("");
    setDuration("");
    setLink("");
    setThumbnail("");
    setTitle("");
  };
  return (
    <div className="mx-auto mt-3">
      <ToastContainer />
      <form
        style={{ backgroundColor: "#FFD580", padding: 10 }}
        onSubmit={handleSubmit}
      >
        <h4>Add New Video</h4>

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
  );
};

export default AddVideoForm;
