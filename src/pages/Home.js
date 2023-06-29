import React, { useState } from "react";
import Videos from "../components/Video/Videos";
import { Link } from "react-router-dom";
import Search from "./Search";

const Home = ({ allVideos }) => {
  // console.log(allVideos)
  const [allVideosData, setAllVideosData] = useState(allVideos);
  const [filteredData, setFilteredData] = useState(allVideos);
  //   console.log(filteredData)
  //handle Search:
  const handleSearch = searchText => {
    let text = searchText.toLowerCase();
    const searchedVideos = allVideosData.filter(videos => {
      const searchResult = videos.title.toLowerCase();
      return searchResult.startsWith(text);
    });
    setFilteredData(searchedVideos);
  };
  return (
    <div>
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

              <Search onSearch={handleSearch} />
            </div>
          </div>
        </nav>
      </div>
      <div className="text-end container">
        <Link to="/add-video" className="btn btn-success mt-5 ">
          Add Video (+)
        </Link>
      </div>
      {allVideosData && <Videos videos={filteredData} />}
    </div>
  );
};

export default Home;
