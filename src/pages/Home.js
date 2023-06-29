import React, { useState } from "react";
import Videos from "../components/Video/Videos";
import { Link } from "react-router-dom";

const Home = ({ allVideos }) => {
  // console.log(allVideos)
  const [allVideosData, setAllVideosData] = useState(allVideos);
  const [filteredData, setFilteredData] = useState(allVideos);
  //   console.log(filteredData)
  return (
    <div>
    <div className="text-end container">
      <Link to='/add-video' className="btn btn-success mt-5 ">Add Video (+)</Link>
    </div>
      {allVideosData && <Videos videos={filteredData} />}
    </div>
  );
};

export default Home;
