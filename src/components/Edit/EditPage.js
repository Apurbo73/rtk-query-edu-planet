import React from "react";
import EditForm from "./EditForm";
import { Link, useParams } from "react-router-dom";
import { useGetSingleVideoQuery } from "../../features/ApiSlice/apiSlice";

const EditPage = () => {
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

      <div style={{marginBottom:250}} className="container  w-50 mt-5  text-center shadow-lg p-3  bg-body rounded">
        {singleVideo && <EditForm singleVideo={singleVideo} />}
      </div>
    </div>
  );
};

export default EditPage;
