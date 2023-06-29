import React, { useState } from "react";
import Videos from "../components/Video/Videos";

const Home = ({ allVideos }) => {
  // console.log(allVideos)
  const [allVideosData, setAllVideosData] = useState(allVideos);
  const [filteredData, setFilteredData] = useState(allVideos);
  //   console.log(filteredData)
  return (
    <div>
      {allVideosData && <Videos videos={filteredData} />}
    </div>
  );
};

export default Home;
