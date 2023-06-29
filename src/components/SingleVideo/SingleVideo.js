import React from "react";
import SingleVideoPage from "./SingleVideoPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { Link, useParams } from "react-router-dom";
import { useGetSingleVideoQuery } from "../../features/ApiSlice/apiSlice";

const SingleVideo = () => {
  const { id } = useParams();
  const {
    data: singleVideo,
    isLoading,
    isError,
    error
  } = useGetSingleVideoQuery(id);
  // console.log(singleVideo)
  return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" href="#">
        <span className="text-warning"> Edu-Planet</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="#">
              About Us
            </Link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
    <div className="d-flex container">
      <div style={{ minWidth: 400, minHeight:100 }} className="mt-4 w-75">
        {singleVideo && <SingleVideoPage singleVideo={singleVideo} />}
      </div>
      <div className="m-4 w-25 d-none d-sm-block">
        {singleVideo && <RelatedVideos singleVideo={singleVideo} />}
      </div>
    </div>
   </div>
  );
};

export default SingleVideo;
